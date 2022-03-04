const db = require('../../data/dbConfig')

function findAllUsers() {
    return db('users')
}

function findBy(filter) {
    return db('users')
    .where(filter)
}

function findById(id) {
    return db('users')
    .where('user_id', id)
    .first()
}

async function addUser(user) {
    const [id] = await db('users')
        .insert(user)
        return findById(id)
}

module.exports = {
    findAllUsers,
    findBy,
    findById,
    addUser
}