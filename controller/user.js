// controll used to pass the control form route to services and handling responce


const async = require('async');
const memServices = require('../service/user.js');

asyncwaterfall = (req,res)=>{


      memServices.asyncwaterfall((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}


asyncauto = (req,res)=>{


      memServices.asyncauto((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}


setimmedate = (req,res)=>{


      memServices.setimmedate((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}


bluebirdd = (req,res)=>{


      memServices.bluebirdd((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}

promiseandcallback1 = (req,res)=>{


      memServices.promiseandcallback1((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}

promiseandco = (req,res)=>{


      memServices.promiseandco((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}
promiseandcallback2 = (req,res)=>{


      memServices.promiseandcallback2((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}

asyncawait = (req,res)=>{


      memServices.asyncawait((err,result)=>{
        if(err){
          res.send(err);
        }
        else{
        res.send(result);
        }
      });

}

module.exports = {
  asyncwaterfall:asyncwaterfall,
  promiseandcallback2:promiseandcallback2,
  promiseandcallback1:promiseandcallback1,
  bluebirdd:bluebirdd,
  setimmedate:setimmedate,
  asyncauto:asyncauto,
  asyncawait:asyncawait,
  promiseandco:promiseandco

}
