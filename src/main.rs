#![allow(dead_code)]
#![allow(unused_variables)]

use colored::*;
use std::{fs, io, path};

mod cli;
mod config;
mod dependency_type;
mod format;
mod group_selector;
mod instance;
mod package_json;
mod semver_group;
mod semver_ranges;
mod specifier;
mod version_group;
mod versions;

/// Read and parse a package.json file
fn read_file<P: AsRef<path::Path>>(
  cwd: &std::path::PathBuf,
  file_path: &P,
) -> io::Result<package_json::PackageJson> {
  let json = fs::read_to_string(file_path)?;
  let contents: serde_json::Value = serde_json::from_str(&json)?;

  Ok(package_json::PackageJson {
    file_path: file_path.as_ref().to_path_buf(),
    json,
    contents,
  })
}

fn main() -> io::Result<()> {
  let cwd = std::env::current_dir()?;

  // - [x] find all package.json files
  // - [x] get enabled dependency types
  // - [x] create semver groups
  // - [x] create version groups
  // - [x] get all instances
  //   - [ ] parse version specifiers
  //   - [ ] set read only initial specifier on instance
  //   - [ ] set latest specifier on instance
  // - [ ] assign instances to semver groups
  // - [ ] assign instances to version groups
  let rcfile = config::get();
  let mut sources = rcfile.get_sources(&cwd);
  let mut packages: Vec<package_json::PackageJson> = sources
    .iter_mut()
    .filter_map(|file_path| read_file(&cwd, &file_path).ok())
    .collect();

  let mut semver_groups = semver_group::SemverGroup::from_rcfile(&rcfile);
  let mut version_groups = version_group::VersionGroup::from_rcfile(&rcfile);
  let enabled_dependency_types = config::Rcfile::get_enabled_dependency_types(&rcfile);

  // store the instances here
  let mut instances: Vec<instance::Instance> = packages
    .iter()
    .flat_map(|package| package.get_instances(&enabled_dependency_types))
    .collect();

  instances.iter_mut().for_each(|instance| {
    semver_groups
      .iter_mut()
      .any(|semver_group| semver_group.add_instance(instance));
    version_groups
      .iter_mut()
      .any(|version_group| version_group.add_instance(instance));
  });

  println!("{}", "rcfile".yellow());
  println!("{:#?}", &rcfile);
  // println!("{}", "strategies".yellow());
  // println!("{:#?}", enabled_dependency_types);
  println!("{}", "semver_groups".yellow());
  println!("{:#?}", &semver_groups);
  println!("{}", "version_groups".yellow());
  println!("{:#?}", &version_groups);
  println!("{}", "instances".yellow());
  println!("{:#?}", &instances);

  match cli::create().get_matches().subcommand() {
    Some(("lint", matches)) => {
      let enabled_steps = cli::get_enabled_steps(matches);
      if enabled_steps.format {
        println!("{}", "Formatting".yellow());
        format::lint_all(&rcfile, &mut packages);
        println!("@TODO: log whether formatting is valid or not");
      }
      if enabled_steps.ranges {
        println!("{}", "Semver Ranges".yellow());
        semver_ranges::lint_all();
        println!("@TODO: log whether semver ranges match or not");
      }
      if enabled_steps.versions {
        println!("{}", "Versions".yellow());
        versions::lint_all();
        println!("@TODO: log whether version mismatches are valid or not");
      }
      Ok(())
    }
    Some(("fix", matches)) => {
      let enabled_steps = cli::get_enabled_steps(matches);
      if enabled_steps.format {
        println!("{}", "Formatting".yellow());
        format::fix_all(&rcfile, &mut packages);
        println!("@TODO: log whether formatting was fixed or not");
      }
      if enabled_steps.ranges {
        println!("{}", "Semver Ranges".yellow());
        semver_ranges::fix_all();
        println!("@TODO: log whether semver range mismatches were fixed or not");
      }
      if enabled_steps.versions {
        println!("{}", "Versions".yellow());
        versions::fix_all();
        println!("@TODO: log whether version mismatches were fixed or not");
      }
      Ok(())
    }
    _ => Err(create_error("unrecognized subcommand")),
  }
}

fn create_error(message: &str) -> io::Error {
  io::Error::new(io::ErrorKind::Other, message)
}
