'use strict';

let superagent = require('superagent');

function setup() {
    superagent.post('https://lap14.herokuapp.com/roles', { "role": "admin", "capabilities": ["create", "read", "update", "delete"] });
    superagent.post('https://lap14.herokuapp.com/roles', { "role": "editor", "capabilities": ["create", "read", "update"] });
    superagent.post('https://lap14.herokuapp.com/roles', { "role": "user", "capabilities": ["read"] });
    superagent.post('https://lap14.herokuapp.com/roles', { "role": "sudo", "capabilities": ["create", "read", "update", "delete", "superuser"] });
}

module.exports = setup;