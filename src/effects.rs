use crate::{
  config::Config,
  dependency::{Dependency, InstanceIdsBySpecifier, InstancesById},
  group_selector::GroupSelector,
  package_json::PackageJson,
  packages::Packages,
};

/// Side effects in Syncpack commands are handled by structs which implement
/// this trait. Multiple commands such as `lint`, `fix`, and `json` all depend
/// on the same core logic, but have different side effects.
///
/// This trait allows the core logic to be reused across all commands, while the
/// side effects are handled by the command-specific structs which implement
/// this trait.
pub trait Effects {
  fn on_event(&mut self, event: Event) -> ();
}

#[derive(Debug)]
pub enum Event<'a, 'b> {
  /// All package.json files have been read from the workspace
  PackagesLoaded(&'a Config, &'a Packages),

  /// Syncpack is about to lint/fix versions/ranges, if enabled
  EnterVersionsAndRanges(&'a Config),
  /// Syncpack is about to lint/fix formatting, if enabled
  EnterFormat(&'a Config),
  /// Linting/fixing has completed
  ExitCommand,

  /// Linting/fixing of formatting has completed and these packages were valid
  PackagesMatchFormatting(&'b Vec<&'a PackageJson>, &'a Config),
  /// Linting/fixing of formatting has completed and these packages were
  /// initially invalid. In the case of fixing, they are now valid but were
  /// invalid beforehand.
  PackagesMismatchFormatting(&'b Vec<&'a PackageJson>, &'a Config),

  /// A version/semver group is next to be processed
  GroupVisited(&'a GroupSelector),

  /// A dependency in an ignored version group has been found
  DependencyIgnored(&'a Dependency),
  /// A dependency in a banned version group has been found
  DependencyBanned(&'a Dependency),
  /// A dependency in a pinned version group has been found where all
  /// instances are valid
  DependencyMatchesPinnedVersion(&'a Dependency),
  /// A dependency in a pinned version group has been found which has one
  /// or more instances with versions that are not the same as the `.pinVersion`
  DependencyMismatchesPinnedVersion(&'a Dependency),
  /// A dependency in a same range version group has been found where all
  /// instances are valid
  DependencyMatchesRange(&'a Dependency),
  /// A dependency in a same range version group has been found which has
  /// one or more instances with versions that are not a semver range which
  /// satisfies all of the other semver ranges in the group
  DependencyMismatchesRange(&'a Dependency),
  /// A dependency in a snapped to version group has been found where all
  /// instances are valid
  DependencyMatchesSnapTo(&'a Dependency),
  /// A dependency in a snapped to version group has been found which has
  /// one or more instances with versions that are not the same as those used
  /// by the packages named in the `.snapTo` config array
  DependencyMismatchesSnapTo(&'a Dependency),
  /// A dependency in a standard version group has been found where all
  /// instances are valid
  DependencyMatchesStandard(&'a Dependency),
  /// A dependency in a standard version group has been found which has
  /// one or more instances with versions that are not the same as the others
  DependencyMismatchesStandard(&'a Dependency),

  /// An instance in a banned version group has been found
  InstanceBanned(&'a mut InstanceEvent<'a>),
  /// An instance in a pinned version group has been found whose version is not
  /// the same as the `.pinVersion`
  InstanceMismatchesPinnedVersion(&'a mut InstanceEvent<'a>),
  /// An instance in a same range version group has been found which has a
  /// version which is not a semver range which satisfies all of the other
  /// semver ranges in the group
  InstanceMismatchesRange(&'a mut InstanceEvent<'a>),
  /// An instance in a snapped to version group has been found which has a
  /// version that is not the same as those used by the packages named in the
  /// `.snapTo` config array
  InstanceMismatchesSnapTo(&'a mut InstanceEvent<'a>),
  /// An instance in a standard version group has been found which is a
  /// dependency developed in this repo, its version does not match the
  /// `.version` property of the package.json file for this package in the repo
  InstanceMismatchesLocalVersion(&'a mut InstanceEvent<'a>),
  /// An instance in a standard version group has been found which has a version
  /// which is not identical to the others, but not all of the instances have
  /// valid or supported version specifiers, so it's impossible to know which
  /// should be preferred
  InstanceUnsupportedMismatch(&'a mut InstanceEvent<'a>),
  /// An instance in a standard version group has been found which has a semver
  /// version which is higher than the lowest semver version in the group, and
  /// `.preferVersion` is set to `lowestSemver`
  InstanceMismatchesLowestVersion(&'a mut InstanceEvent<'a>),
  /// An instance in a standard version group has been found which has a semver
  /// version which is lower than the highest semver version in the group, and
  /// `.preferVersion` is set to `highestSemver`
  InstanceMismatchesHighestVersion(&'a mut InstanceEvent<'a>),
}

#[derive(Debug)]
pub struct InstanceEvent<'a> {
  /// all instances in the workspace
  pub instances_by_id: &'a mut InstancesById,
  ///
  pub dependency: &'a Dependency,
  /// 1. when same range mismatch: the range which was not satisfied by
  ///    `invalid_range` (there may be others which this range does not match,
  ///    they will be reported separately)
  /// 2. when snapped to mismatch: the snapped to instance which should be
  ///    matched
  /// 3. when local mismatch: the local instance which should be matched
  pub mismatches_with: InstanceIdsBySpecifier,
  /// all packages in the workspace
  pub packages: &'a mut Packages,
  /// 1. when same range mismatch: the range which was found not to satisfy
  ///    another
  /// 2. when snapped to mismatch: the specifier which does not match the
  ///    snapped to instance
  /// 3. when local mismatch: the specifier which does not match the local
  ///    instance
  pub target: InstanceIdsBySpecifier,
}
