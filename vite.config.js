const { eleventyPlugin } = require('vite-plugin-eleventy')

module.exports = {
  plugins: [eleventyPlugin()],

  root: 'src',
  build: {
    outDir: '../_site',
  },
}
