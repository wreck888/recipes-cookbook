const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { BCRYPT_ROUNDS, JWT_SECRET } = require('../../config')
const User = require('../auth/auth-model')
const { generateToken } = require('./auth-middleware')

router.post('/register', (req, res, next) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
    user.password = hash 

    User.addUser(user)
        .then(saved => {
            res.status(201).json({ message: `Welcome, ${saved.username}` })
        })
        .catch(next)
})

router.post('/login', (req, res, next) => {
    let { username, password } = req.body

    User.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome back ${user.username}...`,
                    token,
                })
            } else {
                next({
                    status: 401, message: 'Invalid Credentials'
                })
            }
        })
        .catch(next)
})

module.exports = router;