const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 8000;
console.log("Hello from express .");
app.get("/", (request, response) => {    
  response.end("Home page");
});
app.get("/home", (request, response) => {
  response.end("Home page");
});
app.get("/dashboard", (request, response) => {
  response.end("dashboard");
});
// app.listen(port, () => {
//   console.log("Listening request from port 8000");
// });

server.listen(port,()=>{
    console.log("Listening request from port 8000 ...");
})