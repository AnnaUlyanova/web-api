var express = require('express')

var db = require('../db')

var router = express.Router()

module.exports = router

router.get('/', function (req, res) {
  db.getActivities()
    .then(function (activities) {
      res.json({activities: activities})
    })
})
