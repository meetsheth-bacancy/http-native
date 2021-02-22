const http = require('http');
const fs = require('fs');
const port = 4000;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    fs.readFile('./index.html', (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('File not found');
        }
        else { response.write(data); }
        response.end();
    });
    
    if(request.url === '/hello')
    {
        response.write('asdasdasd');
        response.end();  //The method, response.end(), MUST be called on each response.
    }

     
    //response.write('Hello');

})

server.listen(port, (error) => {
    if (error) console.log("Something's wrong" + error);
    else console.log("Server Established");
});