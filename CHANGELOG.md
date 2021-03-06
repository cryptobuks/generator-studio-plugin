# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 0.4.0 - 2018-12-12
### Changed
- Updated the manifest spec.
- Symlink into install directory instead of building into it.
- Target CommonJS in build.

## 0.3.3 - 2018-07-31
### Added
- Expanded manifest.json support.

### Changed
- Changed the lint script, so it also lints .jsx files
- No longer moves over package.json file to bundle.
- Ran prettier formatting and fixed some lint issues in webpack config script.
- Scripts `build:development` and `build:production`.

### Removed
- Unused npm dependency: watch.

## 0.3.2 - 2018-07-26
### Changed
- Fixed a bug when trying to build plugins without providing an env.

## 0.3.1 - 2018-07-24
### Added
- Adds version, dependency status, and download badges to the readme.
- Plugin version in manifest.json.

### Changed
- Update to yeoman-generator v3.

## 0.3.0 - 2018-07-24
### Added
- Automatic reloading of plugins running in Studio after plugin build.
- This change log.

## 0.2.0 - 2018-07-23
### Added
- Code coverage and unit tests.
- Generator composability support.
- Generates an example .gitignore.
- Generator now asks for plugin description and user name/email.
- Generator now asks for and generates a license from a list of spdx licenses.
- Ensures clean build space when plugin is built.
- First public release.

## 0.1.0 - 2018-07-17
### Added
- Yeoman generator for InVision Studio plugins.
- Example plugin source code.
- Example plugin webpack configuration.
- Example package.json.
- Various support files such as eslint and other dotfiles.
