const fs = require("fs");

module.exports = function (eleventyConfig) {
    // Copy dist folder to output
    eleventyConfig.addPassthroughCopy("dist");

    // Watch changes in the assets folder
    eleventyConfig.addWatchTarget("./dist/");

    // https://github.com/bergwerk/11ty-mix/blob/main/.eleventy.js
    eleventyConfig.setBrowserSyncConfig({
        files: ['dist/**/*']
    })
    eleventyConfig.setDataDeepMerge(true)

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: [
            "njk",
        ],

        // These are all optional (defaults are shown):
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};