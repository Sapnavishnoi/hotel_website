module.exports = function(register) {


register.get('/name',(req,res)=>{
    res.sent('Pavan')
})
}