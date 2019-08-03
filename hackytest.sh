#!/bin/bash
# this script takes two arguments your heroku url and your bearer token (just the token nothing else)
# suggested using a super user so that you can make it all work
# 
# echo '{"username":"superUser","password":"superuserpassword","role":"superuser"}' | http post https://lap14.herokuapp.com/signup
  

# example usage 
###
# bash hackytest.sh https://lap14.herokuapp.com/ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDVhN2ZmMDc2ZDExMDAxN2VlZGE3NyIsInJvbGUiOiJzdXBlcnVzZXIiLCJpYXQiOjE1NjQ4NDYwNzksImV4cCI6MTU2NDg0ODc3OX0.Yf6yFVnaQJGXxsvwIYv3YNhLne5AxMnsllekkWl4iwk

http get $1public-stuff "authorization: bearer $2"
http get $1hidden-stuff "authorization: bearer $2"
http get $1something-to-read "authorization: bearer $2"
http post $1create-a-thing "authorization: bearer $2"
http put $1update "authorization: bearer $2"
http patch $1jp "authorization: bearer $2"
http delete $1bye-bye "authorization: bearer $2"
http get $1everything "authorization: bearer $2"
http post $1signin "authorization: bearer $2"


# notes for me
# https://lap14.herokuapp.com/ 
# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDVhN2ZmMDc2ZDExMDAxN2VlZGE3NyIsInJvbGUiOiJzdXBlcnVzZXIiLCJpYXQiOjE1NjQ4NDYwNzksImV4cCI6MTU2NDg0ODc3OX0.Yf6yFVnaQJGXxsvwIYv3YNhLne5AxMnsllekkWl4iwk