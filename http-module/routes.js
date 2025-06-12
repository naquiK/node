const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello World</h1> <p> This is Homepage</p>');
        res.end();
     }
     else if(url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Us</h1> <p> This is About Us page </p>');
        res.end();
     }
        else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('<h1>Page Not Found</h1> <p> This is Page Not Found</p>');
            res.end();
        }
})
port =3000
server.listen(port , ()=>{
    console.log(`app listen on http//localhost:${port}`)
})