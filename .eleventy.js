module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("./src/assets/**/*");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };  

};