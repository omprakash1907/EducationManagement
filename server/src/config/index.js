const dotenv = require('dotenv')

dotenv.config()

const{MONGO_URI, PORT} = process.env

const Config = {MONGO_URI, PORT}

module.exports = Config
