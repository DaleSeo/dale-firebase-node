# Dale's Firebase & Node

# API Test
- curl -X GET http://localhost:3000/todos -v
- curl -X GET http://localhost:3000/todos/-KOjaUiqkAx5OzXzY6sq -v
- curl -X DELETE http://localhost:3000/todos/-KOlrNLcGD73lFzWj3BD -v
- curl -X POST http://localhost:3000/todos -d '{"title": "CCS", "done": false}' -H 'content-type:application/json' -v
- curl -X PUT http://localhost:3000/todos/-KOltUtEgyQXN2FRCSSK -d '{"title": "JavaScript", "done": false}' -H 'content-type:application/json' -v

# Doing
- Following https://isolasoftware.it/2012/05/28/call-rest-api-with-node-js/

# To do
- Try to call Firebase Database REST APIs
- Add a HTTP logger

# Done
- Study Firebase Database REST API
- Develop Todo REST API using Firebase database NodeJS API
- ExpressJS setup