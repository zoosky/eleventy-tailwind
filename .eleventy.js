module.exports = function(eleventyConfig) {
  // Return your Object options:
    eleventyConfig.addPassthroughCopy("./src/assets/**/*");
    eleventyConfig.addWatchTarget("./src/assets/**/*");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };  

};