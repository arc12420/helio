require('dotenv').config();
const express = require('express');
const massive = require('massive');
// const controller = require('./controller');


const {CONNECTION_STRING, SERVER_PORT} = process.env
const app = express();


massive({
    connectionString:CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log(`Database is connected`)
})


app.listen(SERVER_PORT, () => console.log(`Hey, Ya'll have connected up to that port up yonder called port ${SERVER_PORT}. `))