const express = require('express');
const morgan = require('morgan');
const app = express();

app.listen(3000,function(req,res){
  console.log('Listening on port 3000');
});

app.use(morgan('dev'));

app.get('/',function(req,res){
  res.send('Welcome to my lovely homepage :)');
});
