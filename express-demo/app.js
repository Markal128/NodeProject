var express = require("express");
var app = express();

app.all("*", function(req, res, next) {
    console.log("app all router...");
    res.writeHead(200, {"Content-Type": "text/html"});
    next();
});

app.get("/", function(request, response) {
    response.end("欢迎来到首页!");
});

app.get("/about", function(request, response) {
    response.end("欢迎来到about页面!");
});

app.get("*", function(request, response) {
    response.end("404 Error!");
});

app.listen(8080);

console.log("express server is starting on port 8080");