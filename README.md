# daylab13-bearerauth



# LAB - Lab11

## Project Name

### Author: Lee-Roy King

### Links and Resources
* [submission PR](https://github.com/leeroywking-401-advanced-javascript/lab11/pull/1)
* [![Build Status](https://www.travis-ci.com/leeroywking-401-advanced-javascript/daylab13-bearerauth.svg? branch=inclass)](https://www.travis-ci.com/leeroywking-401-advanced-javascript/daylab13-bearerauth)
* ^ travis
* [back-end](https://lap11.herokuapp.com/) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](https://lap11.herokuapp.com/docs/) (Server assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db
* `SECRET` - Arbitrary string
#### Running the app
* `npm start`
* Endpoint: `/signup`
  * Returns a token
* Endpoint: `/signin`
  * Returns a token
* Endpoint: `/books
  * returns all the books (if you are authenticated)
* Endpoint: `/books/:id`
  * returns moby dick no matter what you enter for id
  
#### Tests
/onetime route is single use for a bearer token

so this would be the call pattern for testing

echo '{"username":"lee","password":"lee"}' | http POST :3000/signup;

you can use that token to log back in 

http post :3000/onetime "authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDBmZDU0YTA4ODY3NWRiZmM5NDA4MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTY0NTQzNTU1LCJleHAiOjE1NjQ1NDYyNTV9.palM9oJ7pXt1zEIqOBHMI2M4tmEJH7ysWBYuoI8rCpY"

and then if you try again it will be de-authorized
http post :3000/onetime "authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDBmZDU0YTA4ODY3NWRiZmM5NDA4MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTY0NTQzNTU1LCJleHAiOjE1NjQ1NDYyNTV9.palM9oJ7pXt1zEIqOBHMI2M4tmEJH7ysWBYuoI8rCpY"

this is handled with an in-memory blacklist which will reset if you reset the server via a post to this endpoint
/reset


