const fs = require("fs");

// "./data.txt" path to text file
fs.readFile("./data.txt", (err, data) => {
  if (err) throw err;
  const str = data.toString();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") count++;
  }
  console.log(count);
});
