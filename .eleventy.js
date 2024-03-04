const sass = require("eleventy-sass");
const metagen = require("eleventy-plugin-metagen");

module.exports = (config) => {
  config.addPlugin(sass);
  config.addPlugin(metagen);

  config.addPassthroughCopy("assets");
  config.addPassthroughCopy({ "robots.txt": "/robots.txt" });

  return {
    dir: {
      output: "dist",
    },
  };
};
