Package.describe({
  name: 'srmelody:opencpu',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Meteor support for opencpu to run R functions',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gabonNRI/opencpu',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('opencpu.js');
  api.addFiles(['lib/opencpu-0.4.js', 'lib/jquery-1.11.1.min.js']);
  api.export(['ocpu']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('srmelody:opencpu');
  api.addFiles('opencpu-tests.js');
  api.addFiles(['lib/opencpu-0.4.js', 'lib/jquery-1.11.1.min.js']);
  api.export(['ocpu']);


});
