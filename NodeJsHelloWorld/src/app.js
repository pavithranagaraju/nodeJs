  var express = require('express');
var app = express();
var url=require('url');
var morgan=require('morgan');

app.use(morgan('short'));

app.get('/',function(req,res){
  res.send('The Home Page');
});

app.get('/greet', function (req, res) {
   var queryObject=url.parse(req.url,true).query;
  var greeting=queryObject.greeting||'Default greeting';
  res.setHeader('token','my.little.secret');
  res.send('Hello World!!!!! this is using express'+greeting);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

app.use(function(req,res){
  res.status(404).send('Page not found. Try another.');
}); 
 /* 
var http=require('http');
var url=require('url');
var httpServer=http.createServer(function(req,res){
  var queryObject=url.parse(req.url,true).query;
  var greeting=queryObject.greeting||'Default greeting';
  res.end("this is my first node js app"+greeting);
});
httpServer.listen(3000,function(){
  console.log('Server listening on port 3000');
}); */

