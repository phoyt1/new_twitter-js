const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{ noCache: true }); // point nunjucks to the proper directory for templates
app.listen(3000,function(req,res){
  console.log('Listening on port 3000');
});

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/',routes);
// app.get('/',function(req,res){
//   res.render('index.html',people);
//   //res.send('Welcome to my lovely homepage :)');

// });


// var people = {
//   title: 'An Example',
//   people: [
//     {name:'pat'},
//     {name:'bob'},
//     {name:'shon'}
//   ]
// }


