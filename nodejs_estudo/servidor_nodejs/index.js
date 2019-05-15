const http = require('http');

/*http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>ola mundo</h1>');
    res.end();
}).listen(3000);*/

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>ola mundo</h1>');
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('server on port 3000');
});