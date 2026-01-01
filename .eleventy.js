export default function (eleventyConfig) {
  // Copy sakura.css from node_modules to _site/css/
  eleventyConfig.addPassthroughCopy({
    "node_modules/sakura.css/css/sakura.css": "css/sakura.css"
  });

  // Copy custom CSS
  eleventyConfig.addPassthroughCopy("src/css/custom.css");

  // CNAME for DNS
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};
