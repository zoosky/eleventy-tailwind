module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };  

};