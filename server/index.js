require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const controller = require("./controller");
const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log(`Database is connected`);
});

app.get("/api/posts", controller.get_All_Posts);
app.post("/api/add_User", controller.register);
app.post("/api/login_User", controller.login);
app.get("/api/logout", controller.logout);
app.get("/api/user", controller.user);
app.post("/api/add_post/:id", controller.addPost);
// app.put('/api/update_posts/:id', controller.update_Post)
app.delete("/api/delete_post/:id", controller.delete_Post);

app.listen(SERVER_PORT, () =>
  console.log(
    `Hey, Ya'll have connected to that port up yonder called port ${SERVER_PORT}. `
  )
);
