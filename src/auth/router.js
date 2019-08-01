'use strict';

const express = require('express');
const authRouter = express.Router();
const roles = require('./roles-model.js')
const User = require('./users-model.js');
const auth = require('./middleware.js');
// const oauth = require('./oauth/google.js');
let blacklist = [];


authRouter.post('/signup', (req, res, next) => {
  req.body.createdOn = new Date().getTime();
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send({token: req.token, createdOn: user.createdOn});
    }).catch(next);
});

authRouter.post('/signin', auth(), (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.post('/onetime',auth(), (req, res, next) => {
  console.log(`request authorization: ${req.headers.authorization}`);
  if(blacklist.includes(req.headers.authorization)){res.send('token is expired')}
  blacklist.push(req.headers.authorization);
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.post('/secret', auth(), (req,res,next) => {
  res.cookie('auth', req.token);
  res.send('You have access to the secrets');
});

authRouter.post('/reset', (req,res,next) => {
  blacklist = [];
  res.send('reset the blacklist you little hacker you')
})
// authRouter.get('/oauth', (req,res,next) => {
//   oauth.authorize(req)
//     .then( token => {
//       res.status(200).send(token);
//     })
//     .catch(next);
// });

authRouter.post('/roles', (res,req,next) => {
  let role = new roles(req.body);
  role.save()
  .then( role => res.send(role)
  .catch(next)
  )
})

module.exports = authRouter;