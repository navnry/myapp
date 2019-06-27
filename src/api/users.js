
import express from 'express'
const router = express.Router()



const User = require('../assets/js/user')

router.route('/validate').post((req, res) => {
  User.findOne({name: req.body.name, pass: req.body.pass}, (err, user) => {
    if (err) {
      console.log(err)
    }
    res.json(user)
  })
})

module.exports = router
