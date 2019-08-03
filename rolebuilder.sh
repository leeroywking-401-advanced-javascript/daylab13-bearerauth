#!/bin/bash
echo '{"role":"superuser","capabilities":["create","read","update","delete","superuser"]}'| http post https://lap14.herokuapp.com/roles
echo '{"role":"admin","capabilities":["create","read","update","delete"]}'| http post https://lap14.herokuapp.com/roles
echo '{"role":"editor","capabilities":["create","read","update"]}'| http post https://lap14.herokuapp.com/roles
echo '{"role":"user","capabilities":["read"]}'| http post https://lap14.herokuapp.com/roles

