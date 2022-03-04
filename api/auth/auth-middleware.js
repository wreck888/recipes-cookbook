const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')
const Users = require('../auth/auth-model')

const usernameIsUnique = async ( req, res, next ) => {
    const username = req.body.username
  
    Users.findBy({username})
      .then(([res]) => {
        if(!res){
          next()
        } else {
          next({
            status: 400, message: "username taken" 
          })
        }
      }).catch(next)
  }
  

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

module.exports = { 
    generateToken,
    usernameIsUnique
 } 