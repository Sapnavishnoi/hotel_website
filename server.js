const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'navgurukul',
  database: 'hotelDB'
});
module.exports = connection;
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'navgurukul',
      database : 'hotelDB'
    }
  });
  module.exports = knex;

//  knex.raw('CREATE DATABASE IF NOT EXISTS HotelWebsite')
//   .then((data) => {
//     console.log('Databse created congo.....');
//   })

//   .catch((err) => {
//     console.log("there is some error while creating the database",err);
//   })

  knex.schema.hasTable('hotel').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('hotel', (table) => {
          table.increments('id').primary();
          table.string('first_name', 100).notNullable();
          table.string('last_name', 100).notNullable();
          table.string('email',55).unique().notNullable();
          table.string('password',100).notNullable();
          table.string('retype_password',100).notNullable();
        })
        .catch((err) => {
          console.log("There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
  })
  knex.schema.hasTable('hotel_data').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('hotel_data', (table) => {
          table.increments('id').primary();
          table.string('name', 100).notNullable();
          table.string('rating',100).notNullable();
          table.string('city',100).notNullable();
        })
        .catch((err) => {
          console.log("There is some err while writing the quety")
        })
    }
    return console.log('HOTEL DATA table is created!!!!!!!')
  })
  