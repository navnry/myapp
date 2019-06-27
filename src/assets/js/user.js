import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  pass: String,
  nickName: String
})

module.exports = mongoose.model('User', userSchema)
