const http = require('http');

const server = http.createServer((req, res) => {
if(req.url ==='./index.html'){
    res.end('/index.html');
}else if(req.url ==='./style.css'){
    res.end('/style.css');
}else if(req.url ==='./script.js'){
    res.end('/script.js');
}else{
    res.end('404 Not Found');
}
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});