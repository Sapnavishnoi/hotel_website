module.exports = function(home,knex){
    home.get('/data',(req,res)=>{
        res.render('home')
    })


const json = require('json');
module.exports = (home,express)=>{
  home.use(express.json());
  home.get('/',(req,res,next)=>{

    return res.render('home',{p:[{name:"sapna"},{email:"sap@gamil.com"}]});

  });



};
}
