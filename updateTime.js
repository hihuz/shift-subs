const leftPad = require("left-pad");

// jesus christ I should have just used the parse-ms module...

function getMilliseconds(ms = 0) {
  return leftPad(ms % 1000, 3, "0");
}

function getSeconds(ms = 0) {
  const seconds = Math.floor(ms / 1000);
  return leftPad(Math.floor(ms / 1000) % 60, 2, "0");
}

function getMinutes(ms = 0) {
  return leftPad(Math.floor(ms / (1000 * 60)) % 60, 2, "0");
}
function getHours(ms = 0) {
  return leftPad(Math.floor(ms / (60 * 60 * 1000)), 2, "0");
}

function updateTime(time, offset) {
  const milliseconds = Number(time.split(",")[1]);
  const seconds = Number(time.split(",")[0].split(":")[2]);
  const minutes = Number(time.split(",")[0].split(":")[1]);
  const hours = Number(time.split(",")[0].split(":")[0]);

  const totalTime = milliseconds + seconds * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000;
  const updatedTotalTime = totalTime + Number(offset);

  const updatedHours = getHours(updatedTotalTime);
  const updatedMinutes = getMinutes(updatedTotalTime);
  const updatedSeconds = getSeconds(updatedTotalTime);
  const updatedMilliseconds = getMilliseconds(updatedTotalTime);

  return `${updatedHours}:${updatedMinutes}:${updatedSeconds},${updatedMilliseconds}`;
}

module.exports = {
  updateTime,
  getSeconds,
  getMinutes,
  getHours,
  getMilliseconds
};
