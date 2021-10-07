const Http = require('http');
const fs = require('fs');

Http.createServer((req, res) => {
    if (req.url === "/test") {
        const readstream = fs.createReadStream('./index.html', 'utf-8')
        res.writeHead(200, { 'Content-type': 'text/html' })
        readstream.pipe(res)
    } else {
        console.log("can't work")
    }
}).listen(3000)