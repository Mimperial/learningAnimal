var http = require('http');
http.createServer(function (request,response){
	//发送HTTP头部
	//内容类型：text/plain
	response.WriteHead(200, {'Content-Type': 'text/plain'});
	//发送响应数据
	response.end('Hello World\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
