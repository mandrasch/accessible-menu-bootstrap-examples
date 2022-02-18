const fs = require("fs");

module.exports = function (eleventyConfig) {
    // Copy the `assets` folder to the output
    eleventyConfig.addPassthroughCopy("assets");

    // Watch changes in the assets folder
    eleventyConfig.addWatchTarget("./assets/");

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