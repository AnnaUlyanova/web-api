var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  postUser: postUser,
  updateUser: updateUser,
  getActivities: getActivities
}

function getUsers (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  var db = testDb || connection
  return db('users').where('id', id)
}

function postUser (newUser, testDb) {
  var db = testDb || connection
  return db('users').insert(newUser)
}
function updateUser (id, updatedUser, testDb){
  var db = testDb || connection
  return db('users').where('id', id).update(updatedUser)
}

function getActivities (testDb) {
  var db = testDb || connection
  return db('activities').select()
}
