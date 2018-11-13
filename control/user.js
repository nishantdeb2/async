const services = require('../services');
const async = require('async');

module.exports={
  asyncwaterfall :async(body)=>{
    try{
  // console.log(body);
    let a= await services.user.asyncwaterfall(body);
    //console.log(a.ops);
    // console.log(a);
    return a;

  }
  catch(err)
  {
    throw(err);
  }
},
asyncauto :async(body)=>{
  try{
// console.log(body);
  let a= await services.user.asyncauto(body);
  //console.log(a.ops);
  return a;

}
catch(err)
{
  throw(err);
}
},
asyncawait :async(body)=>{
  try{
// console.log(body);
  let a= await services.user.asyncawait(body);
  // console.log(a);
  return a;

}
catch(err)
{
  throw(err);
}
},
setimmedate :async(body)=>{
  try{
// console.log(body);
  let a= await services.user.setimmedate(body);
  // console.log(a);
  return a;

}
catch(err)
{
  throw(err);
}
},
bluebirdd :async(body)=>{
  try{
// console.log(body);
  let a= await services.user.bluebirdd(body);
  // console.log(a);
  return a;

}
catch(err)
{
  throw(err);
}
},
promiseandco :async(body)=>{
  try{
// console.log(body);
  let a= await services.user.promiseandco(body);
  // console.log(a);
  return a;

}
catch(err)
{
  throw(err);
}
}


  }
