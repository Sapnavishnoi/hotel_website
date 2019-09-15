module.exports = function(search){



    search.get('/get_delhi/:city',(req,res)=>{
        var query = knex('hotel_data').where('city',city).select('*').then((hotelData) => {
            // return response.json(loginData)
              if(city === hotelData[0].city){
                return response.render('search');
              }
              else{
                response.send("hotel data")
              }
            });

        res.render('search')
    })

    

    
}
