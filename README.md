# daylab13-bearerauth

/onetime route is single use for a bearer token

so this would be the call pattern for testing

echo '{"username":"lee","password":"lee"}' | http POST :3000/signup;

you can use that token to log back in 

http post :3000/onetime "authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDBmZDU0YTA4ODY3NWRiZmM5NDA4MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTY0NTQzNTU1LCJleHAiOjE1NjQ1NDYyNTV9.palM9oJ7pXt1zEIqOBHMI2M4tmEJH7ysWBYuoI8rCpY"

and then if you try again it will be de-authorized
http post :3000/onetime "authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDBmZDU0YTA4ODY3NWRiZmM5NDA4MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTY0NTQzNTU1LCJleHAiOjE1NjQ1NDYyNTV9.palM9oJ7pXt1zEIqOBHMI2M4tmEJH7ysWBYuoI8rCpY"

this is handled with an in-memory blacklist which will reset if you reset the server via a post to this endpoint
/reset

