const { updateTime } = require("./updateTime");

function updateLine(line, offset) {
  const lineArray = line.replace("\r", "").split(" --> ");
  const updatedStart = updateTime(lineArray[0], offset);
  const updatedEnd = updateTime(lineArray[1], offset);
  return `${updatedStart} --> ${updatedEnd}`;
}

module.exports = updateLine;
