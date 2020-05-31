var express = require('express');
var app = express();
var bodyParser=require('body-parser');

app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var contactRouter=require('./ContactRouter');
app.use('/v2/contact',contactRouter);
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
