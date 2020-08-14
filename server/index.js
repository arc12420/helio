require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();


const {CONNECTION_STRING, SERVER_PORT} = process.env
// const auth = require('./controller')

app.use(express.json())


massive({
    connectionString:CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log(`Database is connected`)
})

// app.get('/api/posts', controller.get_All_Posts)
app.post('/api/add_User', controller.add_User)
// app.post('/api/add_post', controller.add_post)
// app.put('/api/update_posts/:id', controller.update_Post)
// app.delete('/api/delete_posts/:id', controller.delete_Post)


app.listen(SERVER_PORT, () => console.log(`Hey, Ya'll have connected up to that port up yonder called port ${SERVER_PORT}. `))