var express = require('express')

var db = require('../db')

var router = express.Router()

module.exports = router

router.get('/', function (req, res) {
  db.getUsers()
    .then(function (users) {
      res.json({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', function (req,res) {
  db.getUser(req.params.id)
    .then(function (user) {
      res.json({user: user})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', function (req,res) {
  db.postUser(req.body)
  .then(function (){
    res.send()
  })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/:id', function (req, res) {
  db.updateUser(req.params.id, req.body)
  .then(function (){
    res.send()
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
