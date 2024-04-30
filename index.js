const express = require('express');
const index= express();
const mysql = require('mysql');

index.set('view engine','ejs');


index.use(express.urlencoded({ extended: false }));
index.use(express.json());


index.use('/', require('./router'));

index.listen(5000, ()=>{
    console.log("server: listening port 5000")
});



