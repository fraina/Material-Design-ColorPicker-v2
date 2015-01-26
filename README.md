# Laima

A suite of Front-End Tool to develop, showcase, and mock API,
powered by gulp.

I'd **strongly recommend** that you use <https://github.com/IEMustDie/slush-laima> to generate new projects.

## Requirement

 - Compass

## Install

```bash
npm install
```

## Development

```bash
# default url
http://localhost:4000
```

## Commands

### Run

```bash
gulp
gulp --open local
gulp --port 9527
gulp --mock ./server.js
```

#### Flags
 - `--open <string>` open browser. `[local, external, tunnel]`
 - `--port <number>` set port.
 - `--mock <path/to/file>` set mock.

#### Mock Example
`./server.js`

```js
'use strict';

var Mock = require('mockjs');
var router = require('express').Router();

router.get('/user/:id', function (req, res) {
  res.json(req.params);
});

router.get('/hello', function (req, res) {
  res.json({name: 'Lance'});
});

router.get('/data', function (req, res) {
  var random = Mock.Random;
  var data = {
    boolean: random.boolean(),
    integer: random.integer(1, 9527),
    float: random.float(1, 200, 0, 99),
    string: random.string(7, 10),
    range: random.range(1, 78, 5)
  };

  res.json(data);
});

module.exports = router;
```

### Build

```bash
gulp build
```

### Clean

```bash
gulp clean
```

### Global Flags

 - `--dir <build path>` set path of build.

### Lint

```bash
gulp lint
```

### Doc

```bash
gulp doc
```

### TODO

```bash
gulp todo
```

### Bump

If your version is `0.8.0`.

```bash
gulp bump:major # 1.0.0
gulp bump:minor # 0.9.0
gulp bump:patch # 0.8.1
gulp bump:prerelease # 0.8.1-0
gulp bump --to 1.1.1 # 1.1.1

# default: patch
gulp bump # 0.8.1
```

See <https://github.com/stevelacy/gulp-bump#versioning>.

## Manifest

```text
bower_components/
build/
  docco/
src/
  css/
  font/
  img/
  js/
  index.jade
test/
```

- `.sass|.scss`: `css/`.
- font files: `font/`.
- image files: `img/`.
- `.js|.coffee`: `js/`.
- `.jade|.md|.html|.*`: anywhere.

## Components
 - Sass - MVCSS
   - official <http://mvcss.github.io/>
   - 正體中文文件 <http://mvcss.ycnets.com/>
 - backbone <http://backbonejs.org>
 - CoffeeScript <http://coffeescript.org>
   - CoffeeLint <http://www.coffeelint.org/>
 - ESLint <http://eslint.org/>
 - requirejs <http://requirejs.org>
   - requirejs-text <https://github.com/requirejs/text>
   - requirejs-i18n <https://github.com/requirejs/i18n>
 - jade <http://jade-lang.com/>
   - 正體中文文件 <http://jade.ycnets.com/>
 - Material-Design-ColorHelper <https://github.com/Fraina/Material-Design-ColorHelper>
 - Mock.js <http://mockjs.com/>
 - marked <https://github.com/chjj/marked>
 - Docco <http://jashkenas.github.io/docco/>
 - mocha <http://mochajs.org/>
 - Remarkable <https://jonschlinkert.github.io/remarkable/demo/>

## Config Sample

```js
{
  "compass": {
    "style": "compressed",
    "comments": false,
    "relative": true,
    "sourcemap": true
  },
  "rjs": {
    "optimized": true,
    "options": {
      "name": "main",
      "out": "app.js",
      "paths": {
        "jquery": "bower/jquery/dist/jquery.min",
        "underscore": "bower/lodash/dist/lodash.underscore.min",
        "backbone": "bower/backbone/backbone",
        "i18n": "bower/requirejs-i18n/i18n",
        "text": "bower/requirejs-text/text"
      }
    }
  },
  "jade": {
    "pretty": true
  },
  "docco": {
    "layout": "linear"
  },
  "deploy": {
    "cache": ".cache"
  }
}
```
### Jade options

<http://jade-lang.com/api/>

### Marked options

<https://github.com/chjj/marked#options-1>

### Remarkable options

<https://github.com/jonschlinkert/remarkable#options>

### Docco options

<http://jashkenas.github.io/docco/#configuration>

### Deploy options (for Github pages)

<https://github.com/rowoot/gulp-gh-pages#deployoptions>

## Deployment

### Github pages

```bash
gulp build
gulp deploy
```

### Wrapping in project

In your main project, installs your Laima project by npm.

```bash
npm install your-laima-project --save
gulp build --gulpfile node_modules/your-laima-project/gulpfile.coffee --dir path/to/your/build/dir
```

**Note:** `--dir` is relative to the location of gulpfile.

e.g.

```bash
cd main-project
npm install laima-test-project --save
gulp build --gulpfile node_modules/laima-test-project/gulpfile.coffee --dir ../../public/
```

After running, you will get `public` directory in your `main-project`:

```text
node_modules/
  laima-test-project/
public/
  bower/
  css/
  font/
  img/
  js/
  index.html
```

## About TODO

### Supported Filetypes

See <https://github.com/pgilad/leasot#supported-languages>.

## Landing Page

This project includes a landing page, feel free to remove it.

```text
src/
  css/
    structures/
      _welcomepage.sass
    application.sass
  js/
    main.js
  index.jade
```

 - Remove `_welcomepage.sass`.
 - Remove `@import "structures/welcomepage"` in `application.sass`.
 - Remove `Welcome page` paragraph in `main.js`.
 - Remove `"backstretch": "bower/jquery-backstretch/jquery.backstretch.min"` in `main.js` and in `config.json`.
 - Remove relative things in `index.jade`.

**Note:** If you want to generate projects without the landing page, you can run this command `slush laima:pure`.
