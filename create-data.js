const fs = require("fs");
const path = require("path");
const async = require("async");

const contentDir = path.resolve(__dirname, "content");

function createContent(next) {
  fs.readdir(contentDir, (err, files) => {
    if (err) return next(err);

    const content = {};
    const parseFile = (file, next) => {
      const match = file.match(/^(.+)\.(.{2})\.html$/);
      if (match) {
        console.log(file);
        const section = match[1];
        const language = match[2];
        fs.readFile(path.resolve(contentDir, file), "utf-8", (err, data) => {
          if (err) return next(err);
          content[section] = content[section] || {};
          content[section][language] = data;
          next();
        });
      } else {
        next();
      }
    };

    async.map(files, parseFile, err => {
      if (err) return next(err);
      const data = { content };
      fs.writeFile(
        path.resolve(__dirname, "data.json"),
        JSON.stringify(data, null, 2),
        "utf8",
        next
      );
    });
  });
}

createContent(err => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.info("Done.");
  }
});
