var Metalsmith = require('metalsmith'),
dateInFilename = require('metalsmith-date-in-filename');
collections = require('metalsmith-collections'),
permalinks  = require('metalsmith-permalinks'),
markdown   = require('metalsmith-markdown'),
templates  = require('metalsmith-templates'),
Handlebars = require('handlebars'),
fs         = require('fs');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/footer.hbt').toString());

var applyTemplate = function(config) {
  var pattern = new RegExp(config.pattern);

  return function(files, metalsmith, done) {
    for (var file in files) {
      if (pattern.test(file)) {
        var _f = files[file];
        if (!_f.template) {
          _f.template = config.template;
        }
      }
    }
    done();
  };
}

Metalsmith(__dirname)
.use(dateInFilename({override: true}))
.use(collections())
.use(permalinks())
.use(markdown())
.use(applyTemplate({
  pattern: 'company',
  template: 'default.hbt'
}))
.use(templates('handlebars'))
//.use(assets({
//  source: './assets', // relative to the working directory
//  destination: './assets' // relative to the build directory
//}))
.destination('./build')
.build(function(err){
  if (err) { throw err; }
  else { console.log('Build complete!'); }
});
