const http = require('http')
const server = http.createServer((req, res)=>{
    let url = req.url
    let method = req.method
    console.log('url is:', url)
    console.log('method is:', method)
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Home</title><head>');
        res.write('<body><h1>This is home page !!!!</h1></body>');
        res.write('</html>');
        return res.end()
    }
    if(url==='/cards'){
        res.write('<html>');
        res.write('<head><title>Cards</title><head>');
        res.write('<body><h1>This is card page</h1></body>');
        res.write('</html>');
        return res.end()
    }
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
})
server.listen(4000, ()=>{
    console.log('server is runing........')
})
