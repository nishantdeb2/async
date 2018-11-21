// const connection = require('../dao/data.js').connection;
const database = require('../db');
const express = require('express');
const errorstatus = require('../constant/index.js').errorMessage.eng;
const statuss = require('../constant/index.js').successmessage.eng;
const multer = require('multer');
const async = require('async');
const app=express();

//async asyncwaterfall
   let asyncwaterfall=(cb)=>{
    async.waterfall([

        function (callback) {
         setTimeout(function () {
           console.log("1st function");
           callback(null, 1);
         }, 4000);
       },

       function (a, callback) {// 2nd function having data from 1st function
         setTimeout(function () {
           console.log("2nd function and 1st arg is " + a);
           callback(null, a, 2);
         }, 3000);
       },

       function (c, b, callback) {// 3rd function having data from 1st and 2nd fuction
         setTimeout(function () {
           console.log("3rd function and 1st arg is " + c + " and 2nd arg is " + b);
           callback(null, c);
         }, 3000);
       }
   ], (error, response) => {
     if (response) {
       // console.log(",,,,",errorstatus,statuss);
         cb(errorstatus);
        }
        else{
          cb(null,statuss);
        }


   });
}
// function with promise
let promiseandcallback2=(cb)=>{
  const promise1 = new Promise((resolve, reject) => {
       const collection = db.collection('user');
       let data = collection.find({}).sort({ pushid: 1 }).skip(5).limit(5).toArray()
       n = data.length
       if (n != 5) {
         resolve(data);
       }
       else {
         reject(n);
       }
     });

     promise1.then(function (results) {
       console.log('success', results);
       cb(null,statuss)
     }).catch(function (err) {
       console.log('error');
       cb(errorstatus)
     })


 }
 // function with callback
 let promiseandcallback1=(cb)=>{
   const collection = db.collection('user');
   collection.find({}).sort({ pushid: 1 }).skip(0).limit(5).toArray((err, res) => {
         if (err) {
           console.log("errror in fetching record", err);
           cb(errorstatus)
         }
         else {
           {
             console.log("success", res);
             cb(null,statuss)
           }
         }
       })
       return statuss
 }
// function using promise and coroutine
 let promiseandco=(cb)=>{

   console.log(" promise coroutine and generator");
       const collection = db.collection('user');
       const checkPromise = new Promise((resolve, reject) => {
   let ResultData = collection.find({}).sort({ pushid: -1 }).limit(5).toArray(function (err, result) {
     if (err) {
       reject(err);
     }
     else {
       resolve(result);
     }
   });

 });

 checkPromise.then(function (data) {
   console.log(data);
  cb(null,statuss)
 }).catch(function (err) {
   cb(errorstatus)
 })

}
// blue bird promise
let bluebirdd=(cb)=>{
  console.log("bluebird promise");
      const collection = db.collection('user');

      let dat = collection.find({}).sort({ pushid: 1 }).limit(5).toArray()

      dat.then(function (results) {
        console.log(results);
        cb(null,statuss);
      }).catch(function (err) {
        cb(errorstatus);
      })

}
/*
setimmedate
The main advantage to using setImmediate() over setTimeout() is setImmediate()
will always be executed before any timers if scheduled within an I/O cycle,
independently of how many timers are present.
Timers cannot guaranteed when its callback gets executed even though the timer expiration period is zero,
immediates queue is guaranteed to be processed immediately after the I/O phase of the event loop.
*/
let setimmedate=(cb)=>{
  const collection = db.collection('user');
  collection.find({}).sort({ pushid: 1 }).skip(0).limit(5).toArray((err, res) => {
    if (err) {
      console.log("errror in fetching record", err);
        cb(errorstatus)
    }
    else {
      {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
        console.log("success", res);
          cb(null,statuss)
      }
    }
  })
}
//async await
let asyncawait=async(cb)=>{
  try {


async function one (a){
    setTimeout(function () {
      console.log("It take 5 seconds hello " + a);

    }, 5000);
    return a
  }


  async function two(b) {
    setTimeout(function () {
      console.log("how is your " + b + " going");

    }, 2000);
    return b;
  }

  async function three(a, b) {
    setTimeout(function () {
      console.log("3rd function andd 1st arg is " + a + b);

    }, 0);
    return
  }
let a = await one("nishant")
let b = await two("sunday")
let c = await three(await one(1), await two(2))
  cb(null,statuss)
}
catch (err) {
  cb (err);
}

}
// async auto
let asyncauto=(cb)=>{
  async.auto({
   one: function (callback) {// 1st function
     setTimeout(function () {
       console.log("It take 5 seconds hello");
       callback(null, "first function");
     }, 5000);
   },
   two: function (callback) {// 2nd function without any dependency so it will execute in parallel with 1st
     setTimeout(function () {
       console.log("It take 2 seconds world");
       callback(null, "secondfunction  ");
     }, 2000);
   },
   three: ['one', 'two', function (results, callback) {// 3rd function having depencency of 1st and 2nd
     setTimeout(function () {
       console.log("3rd function and 1st arg is " + JSON.stringify(results));
       callback(null, 'third function ');
     }, 0);
   }]
 }, function (err, result) {// result having result of all function in order of execution
   if (err) {
     cb(errorstatus);
   }
   else {
     cb(null,statuss);
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
