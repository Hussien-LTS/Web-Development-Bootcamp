const fs = require("fs");

fs.writeFile("message.txt", "Hello again", (err) => {
  if (err) throw err;
  console.log("the File has been saved");
});

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
