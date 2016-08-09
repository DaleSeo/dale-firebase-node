var express = require('express');
var router = express.Router();
var firebase = require('firebase');
firebase.initializeApp({
  apiKey: "AIzaSyBlxSB7hHcmupywqc_wrNoKoLxuto5arzw",
  authDomain: "first-643b7.firebaseapp.com",
  databaseURL: "https://first-643b7.firebaseio.com",
  storageBucket: "first-643b7.appspot.com"
});

router.post('/', function(req, res) {
  var result = firebase.database().ref('todos').push(req.body);
  console.log(result);
  res.send(result); // TODO: json parsing error
});

module.exports = router;
