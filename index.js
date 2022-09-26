const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('<p>"Welcome to Full Stack Development."</p>')

        fs.writeFile('developer.txt', '“ I am a pull stack developer !!! 🤣 ”', (err) => {
            if (err) {
                res.write('data write failed');
                res.end();
            } else {
                res.write('data weite successfully');
                res.end();
            }
        })

        fs.readFile('developer.txt', (data, err) => {
            if (err) {
                res.write('data read failed..');
                res.end();
            } else {
                res.write('fread data', data);
                res.end();
            }
        })
    }

})

const PORT = 5000;
server.listen(PORT);
console.log('server is running at PORT', PORT)