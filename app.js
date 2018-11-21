const express = require('express');
const app =express();
const bodyparser = require('body-parser');
const port=3031;
const  controller = require('./controller/user.js');
app.use(bodyparser.urlencoded({extended:true}));
const connection = require('./db.js').connect()

// const {validatebody,schemas} =require('./route/user.js')





app.get('/asyncwaterfall',controller.asyncwaterfall);
app.get('/asyncauto',controller.asyncauto);
app.get('/setimmedate',controller.setimmedate);
app.get('/bluebirdd',controller.bluebirdd);
app.get('/promiseandcallback1',controller.promiseandcallback1);
app.get('/promiseandcallback2',controller.promiseandcallback2);
app.get('/asyncawait',controller.asyncawait);
app.get('/promiseandco',controller.promiseandco);





app.listen(port);
console.log("servrer connect on ",port);
