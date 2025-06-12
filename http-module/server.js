const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1> <p> This is a node js server</p>');
    res.end();
   
});

const port =3000
server.listen(port , () => {
    console.log(`app listen on port no ${port}`)
})