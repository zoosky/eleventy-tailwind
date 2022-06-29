const now = String(Date.now())

module.exports = function (eleventyConfig) {
  // Return your Object options:
    eleventyConfig.addPassthroughCopy("./src/assets/**/*");
    eleventyConfig.addWatchTarget("./src/assets/**/*");
    eleventyConfig.addShortcode('version', function () {
        return now
    })
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };  

};