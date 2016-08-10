var express = require('express');
var firebase = require('firebase');

var router = express.Router();
firebase.initializeApp({
  apiKey: "AIzaSyBlxSB7hHcmupywqc_wrNoKoLxuto5arzw",
  authDomain: "first-643b7.firebaseapp.com",
  databaseURL: "https://first-643b7.firebaseio.com",
  storageBucket: "first-643b7.appspot.com"
});
firebase.database.enableLogging(true);
var todoRef = firebase.database().ref('todos');

router.post('/', function(req, res) {
  console.log("#req.body : ", req.body)
  var result = todoRef.push(req.body);
  console.log(result.key);
  res.send({key : result.key});
});

router.get('/', function(req, res) {
  todoRef.once('value', function(snapshot) {
    console.log("###" + JSON.stringify(snapshot.val()));
    res.send(snapshot.val())
  })
});

router.get('/:key', function(req, res) {
  console.log("#req.params.key : " + req.params.key);
  todoRef.child(req.params.key).once('value', function(snapshot) {
    console.log("###" + JSON.stringify(snapshot.val()));
    res.send(snapshot.val())
  });
});

router.delete('/:key', function(req, res) {
  console.log("#req.params.key : " + req.params.key);
  todoRef.child(req.params.key).remove();
  res.send({message: 'done'});
});

router.put('/:key', function(req, res) {
  console.log("#req.params.key : " + req.params.key);
  todoRef.child(req.params.key).set(req.body);
  res.send({message: 'done'});
});

module.exports = router;