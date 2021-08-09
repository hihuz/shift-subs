const fs = require("fs");
const path = require("path");
const updateLine = require("./updateLine");

const pathArg = process.argv[2];
const offsetArg = process.argv[3];

if (!fs.existsSync(pathArg)) {
  console.error("Provide path to file as first argument.");
}
if (isNaN(offsetArg)) {
  console.error(
    "Provide desired offset (in ms) as second argument.\n" +
      "If you want the subtitles to display earlier, provide a negative offset e.g. -800."
  );
}
if (!fs.existsSync(pathArg) || isNaN(offsetArg)) {
  process.exit();
}

const updatedContent = fs
  .readFileSync(pathArg, "utf8")
  .split("\n")
  .map((line) =>
    line.indexOf(" --> ") !== -1 ? updateLine(line, offsetArg) : line
  )
  .reduce((acc, cur) => acc + cur + "\n", "");

const dir = path.dirname(pathArg);
const fileName = `shifted_${path.basename(pathArg)}`;

fs.writeFileSync(path.join(dir, fileName), updatedContent);
