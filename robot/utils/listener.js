const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4200;

const LogFilePath = path.resolve(__dirname, "common.log");
const stream = fs.createWriteStream(LogFilePath, { flags: "a" });

const StandardMessage = JSON.stringify({
  status: true,
  message: "This is the listener of robot !"
});

const server = http.createServer((req, res) => {
  let buffer = [];

  req.on("error", info => {
    buffer = [];

    res.end(StandardMessage);
  });

  req.on("data", chunk => {
    buffer.push(chunk);
  });

  req.on("end", () => {
    try {
      stream.write("========================================");
      stream.write("\n");
      stream.write(JSON.stringify({ date: Date.now() }));
      stream.write("\n");
      stream.write(JSON.stringify(JSON.parse(buffer.join(""))));
      stream.write("\n");
      stream.write("========================================");
      stream.write("\n");
    } catch (error) {
      console.log("==========================");
      console.log(error);
      console.log("==========================");
    }

    res.end(StandardMessage);
  });
});

server.listen(PORT);
