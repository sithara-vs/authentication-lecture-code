requestAnimationFrame('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT,CONNECTION_STRING} = process.env
const app = express()
app.use(express.json())

massive({
    connectionString : CONNECTION_STRING,
    ssl:{rejectionUnauthorized: false}
}).then(db => {
    app.set('db',db)
    app.listen(SERVER_PORT,()=> console.log('Server Listening'))
    
}).catch(err => console.log(err))