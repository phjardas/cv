const sass = require("eleventy-sass");
const metagen = require("eleventy-plugin-metagen");
const htmlmin = require("html-minifier");
const i18n = require("eleventy-plugin-i18n");
const { format } = require("date-fns");
const { de, enUS } = require("date-fns/locale");

const dateFnsLocales = { de, en: enUS };

module.exports = (config) => {
  config.addPlugin(i18n, {
    translations: require("./_data/i18n"),
  });

  config.addPlugin(sass);
  config.addPlugin(metagen);

  config.addFilter("date", function (date, pattern) {
    const locale = this.page.url.split("/")[1];
    const dateValue = typeof date === "string" ? new Date(date) : date;
    return format(dateValue, pattern, { locale: dateFnsLocales[locale] });
  });

  config.addPassthroughCopy("assets");
  config.addPassthroughCopy({ "robots.txt": "/robots.txt" });

  config.addTransform("htmlmin", function (content) {
    if (this.page.outputPath?.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  return {
    dir: {
      output: "dist",
    },
  };
};
