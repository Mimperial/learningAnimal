/**
 * 整个项目参考地址如下
 * http://blog.csdn.net/piratest/article/details/54584182
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');  
var app = express();

// http://www.cnblogs.com/qingbin-bai/p/6271388.html  node 静态文件处理
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(request, response){  
  // 输出 JSON 格式  
   data = {  
       'first_name':'roby',  
       'last_name':'zhou'  
   };  
   console.log(data);  
  //  response.end(JSON.stringify(data));  
   response.json(data);  
});  
  
// 创建 application/x-www-form-urlencoded 编码解析  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
  
app.post('/post', urlencodedParser, function(request, response){  
  // 输出 JSON 格式  
   data = {  
       'name':request.body.name,  
       'gender':request.body.gender  
   };  
   console.log(data);  
  //  response.end(JSON.stringify(data));  
   response.json(data);  
});  
  
app.get('/roby', function(request, response){  
  var hostName = request.hostname;  
  console.log("hostName: %s", hostName);  
  response.send("I got you!");  
});  
  
var server = app.listen(8081, function(){  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log("address: %s, port: %d", host, port);  
});  