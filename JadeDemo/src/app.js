 var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine','jade');

app.get('/',function(req,res){
  res.render('two',{
    title:'Page Two',
    message:'Page Two By Jade!!'
  });
});

var memberApi=express.Router();


memberApi.get('/',function(req,res){
  res.send('The Member Home Page');
});

memberApi.get('/profile',function(req,res){
  res.send('The Member profiple Page');
});

memberApi.get('/changepassword',function(req,res){
  res.send('The Member change Password Page');
});

var adminApi=express.Router();

adminApi.get('/',function(req,res){
  res.send('The Admin Home Page');
});

app.use('/api/member',memberApi);
app.use('/api/admin',adminApi);
app.use(express.static(__dirname +'/public'));
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
