'use strict';
const path = require('path');

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const TEST_GENERATOR = path.join(__dirname, '../generators/app');
const TEST_DESCRIPTION = 'test description';
const TEST_EMAIL = 'test@example.com';
const TEST_LICENSE = 'MIT';
const TEST_NAME = 'Test Name';
const TEST_PLUGIN_NAME = 'test-org/test-plugin-name';

const TEST_PROMPTS = {
  description: TEST_DESCRIPTION,
  email: TEST_EMAIL,
  license: TEST_LICENSE,
  name: TEST_NAME,
  pluginName: TEST_PLUGIN_NAME
};

describe('generator-studio-plugin:supportedLicense', () => {
  const supportedLicense = require(TEST_GENERATOR).supportedLicense;

  it('handles testing for supported licenses', () => {
    assert(supportedLicense('MIT'));
    assert(!supportedLicense('FOO'));
  });
});

describe('generator-studio-plugin:app', () => {
  const TEST_PLUGIN_DISPLAY_NAME = 'Test Plugin Name';

  beforeAll(() => {
    return helpers.run(TEST_GENERATOR).withPrompts(TEST_PROMPTS);
  });

  it('creates files', () => {
    assert.file([
      'src/in-editor.jsx',
      '.babelrc',
      '.eslintrc.js',
      '.gitignore',
      '.prettierignore',
      '.prettierrc.js',
      'LICENSE',
      'manifest.json',
      'package.json',
      'README.md',
      'webpack.config.js'
    ]);
    assert.fileContent('README.md', `# ${TEST_PLUGIN_NAME}`);
    assert.fileContent('LICENSE', `${new Date().getFullYear()}`);
    assert.fileContent('LICENSE', TEST_NAME);
    assert.jsonFileContent('package.json', {
      author: { name: TEST_NAME, email: TEST_EMAIL },
      description: TEST_DESCRIPTION,
      license: TEST_LICENSE,
      name: TEST_PLUGIN_NAME
    });
    assert.jsonFileContent('manifest.json', {
      author: { name: TEST_NAME, email: TEST_EMAIL },
      description: TEST_DESCRIPTION,
      displayName: TEST_PLUGIN_DISPLAY_NAME,
      license: TEST_LICENSE,
      name: TEST_PLUGIN_NAME
    });
  });
});
