const http = require('http');

let server = http.createServer((request, response)=>{
	if(request.url == '/'){
		response.writeHead(200,{
			'content-type': 'text/html'
		});
		response.write('<html><body><h1>Hello World</h1><p>This is root page</p></body></html>');
		response.end();
	}else if(request.url === '/profile'){
		response.write('<html><body><h1>Hello IIMS College</h1><p>This is profile page</p></body></html>');
		response.end();
	}else{
		response.writeHead(404, {
			'content-type' : 'text/html'
		});
		response.write('<html><body><h1>404 page not found</h1></body></html>')
	}
});

server.listen(8000);
console.log('Sever is running on port: ', 8000);