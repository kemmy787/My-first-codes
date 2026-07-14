const fs = require("fs");
function createAndWriteFile() {
  let filedata = "";
  const fileName = `${new Date().toISOString()}.txt`;
  const cb = (error) => {
    if (error) {
      console.log("There is an error");
      console.log(error);
    }
  };
  for (let i = 0; i < 10000; i++) {
    filedata = filedata + `\nGot you ${i}\n`;
  }
  fs.appendFile(fileName, filedata, cb);
}
function main() {
  for (let i = 0; i < 20; i++) {
    createAndWriteFile();
  }
}
main();
