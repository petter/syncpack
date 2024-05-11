use std::collections::HashSet;
use std::vec;

use crate::instance::Instance;

#[derive(Debug)]
pub struct InstanceGroup<'a> {
  /// Every instance of this dependency in this version group.
  pub all: Vec<&'a Instance<'a>>,
  /// The version specifier which all instances in this group should have
  pub expected_version: Option<String>,
  /// If this dependency is a local package, this is the local instance.
  pub local: Option<&'a Instance<'a>>,
  /// All instances with `Specifier::NonSemver` versions
  pub non_semver: Vec<&'a Instance<'a>>,
  /// All instances with `Specifier::Semver` versions
  pub semver: Vec<&'a Instance<'a>>,
  /// Raw version specifiers for each dependency. If there is more than one
  /// unique version, then we have mismatching versions
  pub unique_specifiers: HashSet<String>,
}

impl<'a> InstanceGroup<'a> {
  pub fn new() -> InstanceGroup<'a> {
    InstanceGroup {
      all: vec![],
      expected_version: None,
      local: None,
      non_semver: vec![],
      semver: vec![],
      unique_specifiers: HashSet::new(),
    }
  }

  pub fn is_mismatch(&self, actual: &String) -> bool {
    // if we determined an expected version... (such as the highest semver version,
    // the local dependency version, or a pinned version)
    match &self.expected_version {
      // ...we can just check if this one matches it
      Some(expected) => actual != expected,
      // if no expected version was suggested, this is because...
      None => match self.non_semver.len() {
        // ...something went badly wrong
        0 => panic!("An expected version was not set for a group with no non-semver versions"),
        // ...or we have an `UnsupportedMismatch`
        _ => true,
      },
    }
  }
}
