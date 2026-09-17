const http = require("http");

const port = 3000;

const server = http.createServer(function(req, res) {
    console.log("Request:", req.url);

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Welcome to Smart Utility Toolkit");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("About Page");
    } else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end("Contact Page");
    } else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

server.listen(port, function() {
    console.log("Server running at http://localhost:" + port);
});