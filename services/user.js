const database = require('../db');
const async = require('async');
var bcrypt = require('bcrypt');
const saltRounds = 10;
// const mongooes = require('mongoose');
var Promise = require("bluebird");
Promise.promisifyAll(require("mongodb"));
const JWT  = require('jsonwebtoken');
const secret = 'NeverShareYourSecret';
const jwtDecode = require('jwt-decode');
const constant= require('../constant').errorMessage.eng;
const statuss = require('../constant').successmessage.eng;
const all = require("bluebird").all
// const collection = db.collection('user');
// import {props, all, coroutine} from 'bluebird';





module.exports={
  asyncwaterfall:async (data)=>
  {
     try{

    async.waterfall([
      function(callback){
        setTimeout(function(){
        console.log("1st function");
        callback(null,1);
      },4000);
      },

      function(a,callback){
        setTimeout(function(){
          console.log("2nd function and 1st arg is" +a);
          callback(null,a,2);
        },3000);
      },

      function(c,b,callback){
        setTimeout(function(){
          console.log("3rd function and 1st arg is "+c+" and 2nd arg is "+b);
          callback(null,c);
        },3000);
      }
    ],

    function(err,result){
      if(err){
        console.log("error");
      }
      else {
        console.log(result);
      }
    }
    );



 return statuss
    }
    catch(err)
    {
      throw(err);
    }

  },
  asyncauto:async (data)=>
  { try{

    async.auto({
       one: function(callback){
          setTimeout(function(){
            console.log("It take 5 seconds hello");
            callback(null,"first function");
          },5000);
        },
       two: function(callback){
        setTimeout(function(){
          console.log("It take 2 seconds world");
          callback(null,"secondfunction  ");
        },2000);
      },
      three: ['one','two',function(results,callback){
        setTimeout(function(){
          console.log("3rd function and 1st arg is "+JSON.stringify(results));
          callback(null,'third function ');
        },0);
      }]
    }, function(err,result){
        if(err){
          console.log("error");
        }
        else {
          console.log(result);
        }
      });


 return statuss
    }
    catch(err)
    {
      throw(err);
    }
  },
  asyncawait:async (data)=>
  { try{


        async function one (a){
          setTimeout(function(){
            console.log("It take 5 seconds hello "+a);

          },5000);
          return a
        }
        let a = await one ("nishant")

       async function two (b){
        setTimeout(function(){
          console.log("how is your "+b+" going");

        },2000);
        return b;
      }
      let b = await two  ("sunday")
    async function three (a,b){
        setTimeout(function(){
          console.log("3rd function andd 1st arg is "+a+b );

        },0);
        return
      }



 let c = await three (await one(1),await two(2))
 return statuss
    }
    catch(err)
    {
      throw(err);
    }
  },
  setimmedate:async (data)=>
  { try{
    setImmediate(() => {
      console.log("setimmedate1")
      // setImmediate(()=> {
      //   setTimeout(()=>{
      //     console.log("setTimeout 2");
      //     // console.log(idd);
      //   },100)
      //   console.log("setImmediate 2");
      //    console.log(idd); });
      n=0
      while(n<1000)
      {
        console.log("..",n++);
        // console.log(idd);
      }
    })
const collection=db.collection('user');

let idd = await  collection.find({}).sort({pushid:1}).limit(2).toArray()
// console.log(idd);
console.log("...",idd)
setTimeout(()=>{

  console.log("settime out ");

},0)

 return statuss
    }
    catch(err)
    {
      throw(err);
    }
  },
   bluebirdd : (data)=>
   {
 // try {
console.log("bluebird promise");
   const collection=db.collection('user');

   let dat= collection.find({}).sort({pushid:1}).limit(5).toArray()

   dat.then(function(results){
  console.log('success',results);
   }).catch(function(err){
  console.log('error');
  })

  // collection.find({}).sort({pushid:1}).limit(2).toArray().then()
   return statuss
 // }
 // catch(err)
 // {
 //   throw(err);
 // }

},

  promiseandco : (data)=>
  {
// try {
  console.log(" promise coroutine and generator");
  const collection=db.collection('user');
  function* pro() {
     const [user1, user2, user3] = yield all([
         collection.find({}).sort({pushid:1}).skip(0).limit(5),
         collection.find({}).sort({pushid:1}).skip(5).limit(5),
         collection.find({}).sort({pushid:1}).skip(10).limit(5)
     ]);

}
 let dataa = pro()
console.log(data);
// collection.find({}).sort({pushid:1}).limit(2).toArray().then()
return statuss
// }
// catch(err)
// {
//   throw(err);
// }

},
promiseandcallback1 : (data)=>
{
  const promise1 = new Promise((resolve,reject)=>{
    const collection = db.collection('user');
    let data = collection.find({}).sort({pushid:1}).skip(5).limit(5).toArray()
    n= data.length
    if(n!=5){
      resolve(data);
    }
    else{
     reject(n);
    }
  });

  promise1.then(function(results){
console.log('success',results);
}).catch(function(err){
console.log('error');
})
return statuss

},
promiseandcallback2 : (data)=>
{

    const collection = db.collection('user');
    collection.find({}).sort({pushid:1}).skip(0).limit(5).toArray((err,res)=>{
      if(err)
      {
        console.log("errror in fetching record",err);
      }
      else {
        {
          console.log("success",res);
        }
      }
    })




return statuss




}

}
