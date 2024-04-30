const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'crud_nodejs_db'
    });

conexion.connect((error)=>{
    if(error){
        console.error("el error es:" +error);
        return
    }
    console.log("conectado a la DB");
});

module.exports = conexion;


