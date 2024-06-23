// #[cfg(test)]
// mod tests {
//   use super::*;

//   fn to_strings(specifiers: Vec<&str>) -> Vec<String> {
//     specifiers.iter().map(|s| s.to_string()).collect()
//   }

//   #[test]
//   fn alias() {
//     let cases: Vec<String> = to_strings(vec![
//       "npm:@minh.nguyen/plugin-transform-destructuring@^7.5.2",
//       "npm:@types/selenium-webdriver@4.1.18",
//       "npm:foo@1.2.3",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Alias(case.to_string()),
//         "{} should be alias",
//         case
//       );
//     }
//   }

//   #[test]
//   fn exact() {
//     let cases: Vec<String> = to_strings(vec![
//       "1.2.3",
//       // @TODO: how to support postfix?
//       // "1.2.3-alpha.1",
//       // "1.2.3-alpha.1+build.123",
//       // "1.2.3+build.123",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Exact(case.clone()),
//         "{} should be exact",
//         case
//       );
//     }
//   }

//   #[test]
//   fn file() {
//     let cases: Vec<String> = to_strings(vec![
//       "file:../path/to/foo",
//       "file:./path/to/foo",
//       "file:/../path/to/foo",
//       "file:/./path/to/foo",
//       "file:/.path/to/foo",
//       "file://../path/to/foo",
//       "file://.",
//       "file://./path/to/foo",
//       "file:////path/to/foo",
//       "file:///path/to/foo",
//       "file://path/to/foo",
//       "file:/~path/to/foo",
//       "file:/path/to/foo",
//       "file:path/to/directory",
//       "file:path/to/foo.tar.gz",
//       "file:path/to/foo.tgz",
//       "file:path/to/foo",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::File(case.clone()),
//         "{} should be file",
//         case
//       );
//     }
//   }

//   #[test]
//   fn git() {
//     let cases: Vec<String> = to_strings(vec![
//       "git://github.com/user/foo",
//       "git://github.com/user/foo#1.2.3",
//       "git://github.com/user/foo#semver:^1.2.3",
//       "git://notgithub.com/user/foo",
//       "git://notgithub.com/user/foo#1.2.3",
//       "git://notgithub.com/user/foo#semver:^1.2.3",
//       "git+ssh://github.com/user/foo",
//       "git+ssh://github.com/user/foo#1.2.3",
//       "git+ssh://github.com/user/foo#semver:^1.2.3",
//       "git+ssh://notgithub.com/user/foo",
//       "git+ssh://notgithub.com/user/foo#1.2.3",
//       "git+ssh://notgithub.com/user/foo#semver:^1.2.3",
//       "git+ssh://mydomain.com:1234/hey",
//       "git://notgithub.com/user/foo",
//       "git+ssh://git@github.com:user/foo#semver:^1.2.3",
//       "git+ssh://git@github.com/user/foo#1.2.3",
//       "git+ssh://git@github.com/user/foo#semver:^1.2.3",
//       "git+ssh://git@notgithub.com:user/foo",
//       "git+ssh://git@notgithub.com:user/foo#1.2.3",
//       "git+ssh://git@notgithub.com:user/foo#semver:^1.2.3",
//       "git+ssh://git@notgithub.com/user/foo",
//       "git+ssh://git@notgithub.com/user/foo#1.2.3",
//       "git+ssh://git@notgithub.com/user/foo#semver:^1.2.3",
//       "git+ssh://mydomain.com:1234/hey",
//       "git+ssh://mydomain.com:1234/hey#1.2.3",
//       "git+ssh://mydomain.com:1234#1.2.3",
//       "git+ssh://mydomain.com:foo",
//       "git+ssh://mydomain.com:foo/bar#1.2.3",
//       "git+ssh://mydomain.com:foo#1.2.3",
//       "git+ssh://username:password@mydomain.com:1234/hey#1.2.3",
//       "git+https://github.com/user/foo",
//       "git+ssh://git@notgithub.com/user/foo#1.2.3",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Git(case.clone()),
//         "{} should be git",
//         case
//       );
//     }
//   }

//   #[test]
//   fn latest() {
//     let cases: Vec<String> = to_strings(vec!["latest", "*"]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Latest("*".to_string()),
//         "{} should be latest",
//         case
//       );
//     }
//   }

//   #[test]
//   fn major() {
//     let cases: Vec<String> = to_strings(vec!["1"]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Major(case.clone()),
//         "{} should be major",
//         case
//       );
//     }
//   }

//   #[test]
//   fn minor() {
//     let cases: Vec<String> = to_strings(vec!["1.2"]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Minor(case.clone()),
//         "{} should be minor",
//         case
//       );
//     }
//   }

//   #[test]
//   fn range() {
//     let cases: Vec<String> = to_strings(vec![
//       "^4.1.1", "~1.2.1", ">=5.0.0", "<=5.0.0", ">5.0.0",
//       "<5.0.0",
//       // ">=5.0.0 <6.0.0",
//       // ">5.0.0 <6.0.0",
//       // ">=5.0.0 <=6.0.0",
//       // ">5.0.0 <=6.0.0",
//       // ">=5.0.0 <6.0.0",
//       // ">5.0.0 <6.0.0",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Range(case.clone()),
//         "{} should be range",
//         case
//       );
//     }
//   }

//   #[test]
//   fn range_minor() {
//     let cases: Vec<String> = to_strings(vec!["^4.1", "~1.2", ">=5.0", "<=5.0", ">5.0", "<5.0"]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::RangeMinor(case.clone()),
//         "{} should be range-minor",
//         case
//       );
//     }
//   }

//   #[test]
//   fn tag() {
//     let cases: Vec<String> = to_strings(vec!["alpha", "canary", "foo"]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Tag(case.clone()),
//         "{} should be tag",
//         case
//       );
//     }
//   }

//   #[test]
//   fn unsupported() {
//     let cases: Vec<String> = to_strings(vec![
//       "@f fo o al/ a d s ;f",
//       "@foo/bar",
//       "@foo/bar@",
//       "/path/to/foo.tar",
//       "/path/to/foo.tgz",
//       "/path/to/foo",
//       "$typescript",
//       "1.typo.wat",
//       "=v1.2.3",
//       "not-git@hostname.com:some/repo",
//       "user/foo#1234::path:dist",
//       "user/foo#notimplemented:value",
//       "user/foo#path:dist",
//       "user/foo#semver:^1.2.3",
//       "git+file://path/to/repo#1.2.3",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Unsupported(case.clone()),
//         "{} should be unsupported",
//         case
//       );
//     }
//   }

//   #[test]
//   fn url() {
//     let cases: Vec<String> = to_strings(vec![
//       "http://insecure.com/foo.tgz",
//       "https://server.com/foo.tgz",
//       "https://server.com/foo.tgz",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::Url(case.clone()),
//         "{} should be url",
//         &case
//       );
//     }
//   }

//   #[test]
//   fn workspace_protocol() {
//     let cases: Vec<String> = to_strings(vec!["workspace:*", "workspace:^", "workspace:~"]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::WorkspaceProtocol(case.clone()),
//         "{} should be workspace-protocol",
//         case
//       );
//     }
//   }

//   #[test]
//   fn complex_range() {
//     let cases: Vec<String> = to_strings(vec![
//       "1.3.0 || <1.0.0 >2.0.0",
//       "<1.0.0 >2.0.0",
//       ">1.0.0 <=2.0.0",
//       "<1.0.0 >=2.0.0",
//       "<1.5.0 || >=1.6.0",
//       "<1.6.16 || >=1.7.0 <1.7.11 || >=1.8.0 <1.8.2",
//       "<=1.6.16 || >=1.7.0 <1.7.11 || >=1.8.0 <1.8.2",
//       ">1.0.0 <1.0.0",
//     ]);
//     for case in cases {
//       let parsed = AnySpecifier::new(&case);
//       assert_eq!(
//         parsed,
//         AnySpecifier::RangeComplex(case.clone()),
//         "{} should be range-complex",
//         case
//       );
//     }
//   }

//   // #[test]
//   // fn change_semver_range() {
//   //   let cases: Vec<(&str, &str)> = vec![
//   //     ("^", "^1.2.3"),
//   //     ("~", "~1.2.3"),
//   //     (">=", ">=1.2.3"),
//   //     ("<=", "<=1.2.3"),
//   //     (">", ">1.2.3"),
//   //     ("<", "<1.2.3"),
//   //     ("", "1.2.3"),
//   //   ];
//   //   for (_, initial) in &cases {
//   //     let initial = initial.to_string();
//   //     for (range, expected) in &cases {
//   //       let range = SemverRange::new(&range.to_string()).unwrap();
//   //       let expected = expected.to_string();
//   //       let parsed = AnySpecifier::new(&initial);
//   //       assert_eq!(
//   //         parsed.with_range_if_semver(&range),
//   //         AnySpecifier::new(&expected.clone()),
//   //         "{} + {:?} should produce {}",
//   //         initial,
//   //         range,
//   //         expected
//   //       );
//   //     }
//   //   }
//   // }
// }
