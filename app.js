
const knex = require('./server.js');
// console.log(knex);

const express = require('express');
var app = express();
app.use(express.json());

// here I am using the ejs syntax for connection to node js
const ejs = require('ejs');
app.set('view engine', 'ejs');

// using the static files.....
app.use(express.static("public"));

// using the body-parser for parse the data from html form as a middleware.
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});


app.use('/name',(req,res)=>{
  res.send('Pavan')
})

var register = express.Router();
app.use('/register',register)
require('./register')(register,knex);

var login = express.Router();
app.use('/login',login)
require('./login')(login,knex);

var home = express.Router();
app.use('/home', home)
require('./home')(home,knex);

var search = express.Router();
app.use('/search', search)
require('./search')(search,knex);





const port = 4000;

app.listen(port,()=> console.log(`server is listening ..port ${port}........`));;

