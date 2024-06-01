use itertools::Itertools;
use std::cmp::Ordering;

use crate::{
  config::Config,
  context::{self, Context},
  effects::{Effects, Event},
  format::{self, InMemoryFormattingStatus},
  packages::Packages,
  version_group::VersionGroupVariant,
};

pub fn fix(config: &Config, packages: &mut Packages, effects: &mut impl Effects) {
  effects.on_event(Event::PackagesLoaded(&config, &packages));

  let cli = &config.cli;
  let Context {
    mut instances_by_id,
    version_groups,
  } = context::get(&config, &packages);

  effects.on_event(Event::EnterVersionsAndRanges(&config));

  if cli.options.ranges || cli.options.versions {
    version_groups
      .iter()
      // fix snapped to groups last, so that the packages they're snapped to
      // have had any fixes applied to them first.
      .sorted_by(|a, b| {
        if matches!(a.variant, VersionGroupVariant::SnappedTo) {
          Ordering::Greater
        } else if matches!(b.variant, VersionGroupVariant::SnappedTo) {
          Ordering::Less
        } else {
          Ordering::Equal
        }
      })
      .for_each(|group| {
        group.visit(&mut instances_by_id, packages, effects);
      });
  }

  effects.on_event(Event::EnterFormat(&config));

  if cli.options.format {
    let InMemoryFormattingStatus {
      was_valid: valid,
      was_invalid: invalid,
    } = format::fix(&config, packages);
    if !valid.is_empty() {
      effects.on_event(Event::PackagesMatchFormatting(&valid, &config));
    }
    if !invalid.is_empty() {
      effects.on_event(Event::PackagesMismatchFormatting(&invalid, &config));
    }
  }

  // write the changes to the package.json files
  packages.by_name.values_mut().for_each(|package| {
    package.write_to_disk(&config);
  });

  effects.on_event(Event::ExitCommand);
}
