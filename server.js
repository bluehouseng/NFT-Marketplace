const http = require("http");
const { app } = require("./app");
const Port = 2020;
const server = http.createServer(app);

server.listen(Port, () => {
  console.log(`server listening on:::${Port}`);
});
