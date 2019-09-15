
module.exports = function(login){



    login.get('/get',(req,res)=>{
        res.render('login')
    })

    login.post('/post',(request, response, next) => {
        var email = request.body.email;
        console.log(email)
        var password = request.body.psw;
        console.log(password)
        var query = knex('hotel').where('email',email).select('*').then((loginData) => {
          // return response.json(loginData)
            if(email === loginData[0].email && password === loginData[0].password){
              return response.render('login');
            }
            else{
              response.send("please check your email and password")
            }
          });
      });

}





