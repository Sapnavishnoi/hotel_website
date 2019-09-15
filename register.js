module.exports = function(register,knex){
    register.get('/l',(req,res)=>{
        res.render('register')
    })




register.post("/signup",(req,res,next)=>{
    const user = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password,
        retype_password:req.body.retype_password
    }
    
    knex('hotel').insert(user).then(() => {
        knex('hotel').select('*').where('email',user.email).then((data)=>{
            var data = data[0]
            if (data.password==data.retype_password){
                res.send('signup is done!!!!')
            }else{
                res.send("Re enter your password")
            }
        })
      console.log("done");
    })
})
}

