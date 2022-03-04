module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'secret',
    JWT_SECRET: process.env.JWT_SECRET || 'keepin secrets',
  }