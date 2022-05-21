const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url === '/'){
    res.end('Welcome to our home page')
}
    if (req.url === '/about'){
        res.end('Here is our short history')
    } else {
    res.end(`
        <h1>OOps!</h1>
        <p>It seems we can't find the page you're looking for</p>
        <a href="/">come back home</a>
        `)
    }
})

server.listen(5000)