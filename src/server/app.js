var url = "mongodb://localhost:27017/test"
var mongoose = require('mongoose')
mongoose.connect(url, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('db connect success')
  }
})