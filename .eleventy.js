const yaml = require('js-yaml')
const pluginBookshop = require('@bookshop/eleventy-bookshop')

module.exports = function (eleventyConfig) {
  ////---------------
  //// FILTERS
  ////---------------

  // Filters collection by a frontmatter key + value
  // eleventyConfig.addFilter('filterByFrontmatter', (collection, key, value) => {
  //   const found = collection.filter((item) => {
  //     return item.data[key].includes(value)
  //   })
  //   return found
  // })

  // // Returns each collection item which fileSlug is included in an array
  // eleventyConfig.addFilter('filterBySlug', function (collection, slugList) {
  //   const found = collection.filter((item) => {
  //     return slugList.includes(item.fileSlug)
  //   })
  //   return found
  // })

  ////---------------
  //// SHORTCODES
  ////---------------

  // eleventyConfig.addLiquidShortcode('image', imageShortcode)

  ////---------------
  //// PLUGINS
  ////---------------

  eleventyConfig.addPlugin(
    pluginBookshop({
      bookshopLocations: ['component-library'],
      pathPrefix: '',
    })
  )

  // eleventyConfig.addPlugin(metagen)
  // eleventyConfig.addPlugin(faviconsPlugin)
  ////---------------
  //// CONFIG
  ////---------------

  // eleventyConfig.addPassthroughCopy('./src/assets/img')
  // eleventyConfig.addPassthroughCopy('./src/assets/textures')

  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents))

  // eleventyConfig.addWatchTarget(
  //   './component-library/components/**/*{html,liquid,yml,yaml}'
  // )

  // eleventyConfig.setBrowserSyncConfig({
  //   files: './_site/assets/css/**/*.css',
  // })

  return {
    dir: {
      // input: 'src', set in vite
      // ⚠️ Values below are relative to the input directory.
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  }
}
