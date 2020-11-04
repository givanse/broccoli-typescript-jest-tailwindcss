const { TypescriptCompiler } = require("broccoli-typescript-compiler");
const PostCSS = require('broccoli-postcss-single');
const { MergeTrees } = require('broccoli-merge-trees');
const funnel = require('broccoli-funnel');

const tsconfig = require('./tsconfig.js');
const js = new TypescriptCompiler('./src/js', {
  tsconfig,
  throwOnError: true,
  annotation: 'compile js',
});

const postCssConfig = require('./postcss.config.js');
const css = new PostCSS(['./src/css'], 'index.css', 'index.css', postCssConfig);

const html = funnel('./src', {
  files: ['index.html'],
  annotation: 'copy html',
});

const staticAssets = funnel('./static-assets', {
  annotation: 'copy static assets',
});

module.exports = new MergeTrees([js, html, css, staticAssets], {annotation: 'putting it all together'});
