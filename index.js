import http from "http";
import url from "node:url";
import fs from "fs/promises";

http.createServer(async (req, res) => {
    if (req.url == "/about") {
        try {
            res.writeHead(200, {'Content-Type': 'text/html'});
            const content = await fs.readFile("pages/about.html");
            res.end(content)
        } catch (e) {
            console.log(e);
        }
    } else if (req.url == "/contact-me") {
        try {
            res.writeHead(200, {'Content-Type': 'text/html'});
            const content = await fs.readFile("pages/contact-me.html");
            res.end(content);
        } catch(e) {
            console.log(e);
        }
    } else if (req.url == "/") {
        try {
            res.writeHead(200, {'Content-Type': 'text/html'});
            const content = await fs.readFile("pages/index.html");
            res.end(content);
        } catch(e) {
            console.log(e);
        }
    } else {
        try {
            res.writeHead(404, {'Content-Type': 'text/html'});
            const content = await fs.readFile("pages/404.html");
            res.end(content);
        } catch(e) {
            console.log(e);
        }
    }

}).listen(8080);