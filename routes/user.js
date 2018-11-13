const Joi = require('joi');
const path = require('path');

const JWT         = require('jsonwebtoken');
//const fs = require('fs');
const secret = 'NeverShareYourSecret';
const control = require('../control');

module.exports=[

{   method: 'GET',
    path: '/asyncwaterfall',
    config: {

          validate: {

              },
        },
        handler: function (request, h){
        try{
          let a=  control.user.asyncwaterfall();
            return a
          }
          catch(err)
          {
          throw(err);
          }
          }
},
{   method: 'GET',
    path: '/asyncauto',
    config: {

          validate: {

              },
        },
        handler: function (request, h){
        try{
          let a=  control.user.asyncauto();
            return a
          }
          catch(err)
          {
          throw(err);
          }
          }
},
{   method: 'GET',
    path: '/asyncawait',
    config: {

          validate: {

              },
        },
        handler: function (request, h){
        try{
          let a=  control.user.asyncawait();
            return a
          }
          catch(err)
          {
          throw(err);
          }
          }
},
{   method: 'GET',
    path: '/setimmedate',
    config: {

          validate: {

              },
        },
        handler: function (request, h){
        try{
          let a=  control.user.setimmedate();
            return a
          }
          catch(err)
          {
          throw(err);
          }
          }
},
{   method: 'GET',
    path: '/bluebirdd',
    config: {

          validate: {

              },
        },
        handler: function (request, h){
        try{
          let a=  control.user.bluebirdd();
            return a
          }
          catch(err)
          {
          throw(err);
          }
          }
},
{   method: 'GET',
    path: '/promiseandco',
    config: {

          validate: {

              },
        },
        handler: function (request, h){
        try{
          let a=  control.user.promiseandco();
            return a
          }
          catch(err)
          {
          throw(err);
          }
          }
}
]
