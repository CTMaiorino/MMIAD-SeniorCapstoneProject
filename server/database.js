const mysql = require('mysql');

// Database Connection for Production

let config = {
     user: process.env.DB_USER,
     database: process.env.DB_DATABASE,
     password: process.env.DB_PASS,
     instance_name: process.env.DB_INSTANCE_NAME
 }

 if (process.env.DB_INSTANCE_NAME && process.env.NODE_ENV === 'production') {
   config.socketPath = `/cloudsql/${process.env.DB_INSTANCE_NAME}`;
 }
 
let connection = mysql.createConnection(config);

// Database Connection for Development
/*
let connection = mysql.createConnection({  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  instance_name: process.env.DB_INSTANCE_NAME
});


  


const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as thread id: ' + connection.threadId);
});
*/
  module.exports = connection;