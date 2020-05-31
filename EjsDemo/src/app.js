 var express = require('express');
var app = express();

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('pages/three',{
    tagline:'Page Three EJS'
    
  });
});


app.get('/demo',function(req,res){
  res.render('pages/BootstrapTemplateDemo',{
    tagline:'Page Three EJS'
    
  });
});

app.get('/form',function(req,res){
  res.render('pages/forms',{
    tagline:'Page Three EJS'
    
  });
});

app.post('/form',function(req,res){
 
  console.log(req.body.inputEmail3 +" , "+req.body.inputPassword3);
  res.send('Login Successful')
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
