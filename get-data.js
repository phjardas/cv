const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

const contentDir = path.resolve(__dirname, "content");

async function parseContent(input) {
  return new Promise((resolve, reject) => {
    let data = "";
    input.resume();
    input.setEncoding("utf8");
    input.on("error", reject);
    input.on("data", chunk => (data += chunk));
    input.on("end", () => resolve(JSON.parse(data)));
  });
}

async function writeContent(key, lang, content) {
  const file = path.resolve(contentDir, `${key}.${lang}.html`);
  console.log("writing [%s] in [%s] to %s", key, lang, file);
  return writeFile(file, content, "utf8");
}

async function getContent() {
  const { content } = await parseContent(process.stdin);
  Promise.all(
    Object.keys(content).map(key =>
      Object.keys(content[key]).map(lang =>
        writeContent(key, lang, content[key][lang])
      )
    )
  );
}

getContent()
  .then(() => console.info("Done."))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
