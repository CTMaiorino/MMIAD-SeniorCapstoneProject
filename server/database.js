const mysql = require('mysql');
const Sequelize = require('sequelize');

// Database Connection for Production
/*
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
*/
// Database Connection for Development
/*
let connection = mysql.createConnection({  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  instance_name: process.env.DB_INSTANCE_NAME
});


  




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

//Database connection for sequlize 

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_INSTANCE_NAME = process.env.DB_INSTANCE_NAME;
/*
const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,
  {
  dialect:
  "mysql",
  dialectOptions: {
  socketPath: `/cloudsql/${process.env.DB_INSTANCE_NAME}`,
  },
  }
  );
*/

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
  host: '/cloudsql/major-and-minor-intron-db:us-east1:mmiad-db',
  timestamps: false,
  dialectOptions: {
    socketPath: '/cloudsql/major-and-minor-intron-db:us-east1:mmiad-db',
},
});

/*
const sequelize = new Sequelize('{db_name}', '{db_user}', '{db_password}', {
  dialect: 'mysql',
  host: '/cloudsql/{instance}',
  timestamps: false,
  dialectOptions: {
    socketPath: '/cloudsql/{instance}'
},
});
*/
/*
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
});
*/
  module.exports = sequelize;