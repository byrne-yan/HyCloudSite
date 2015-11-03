Package.describe({
  name: 'hycloud:serve-static',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Npm.depends({
  'content-disposition':'0.5.0',
  'finalhandler':'0.4.0',
  'serve-static':'1.10.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('webapp');
  api.use('ecmascript');
  api.addFiles('serve-static.js','server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hycloud:serve-static');
  api.addFiles('serve-static-tests.js');
});
