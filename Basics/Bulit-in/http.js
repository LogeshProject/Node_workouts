const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res)=>{
    // res.writeHead(200 , {'Content-Type': 'text/plain'});
    // res.write('Hello World')

    // res.writeHead(200 , {'Content-Type': 'text/html'});
    // res.write('<h1>Hello World</h1>')

    let user ={
        name : 'Logesh',
        age : 21
    }



    // res.writeHead(200 , {'Content-Type': 'application/json'});
    // res.end(JSON.stringify(user))

    res.writeHead(200 , {'Content-Type': 'text/html'});

    let name = 'Logu'

    let html = fs.readFileSync('./index.txt','utf-8')
    html = html.replace('{{name}}',name)
    res.end(html)
})

server.listen(3000 , ()=>{
    console.log('server running on port : 3000')
})