const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.check_user(username);
    if (!user[0]) {
      return res.status(401).send("Incorrect credentials");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          userId: user[0].id,
          username: user[0].username,
          profile_pic: user[0].profile_pic,
        };
        console.log(req.session.user);
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Username or password incorrect");
      }
    }
  },
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const existingUser = await db.check_user(username);
    if (existingUser[0]) {
      return res.status(409).send("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.add_user([username, hash]);
    console.log(newUser);
    req.session.user = {
      userId: newUser.id,
      username: newUser.username,
      profile_pic: newUser.profile_pic,
    };
    res.status(200).send(req.session.user);
  },
  user: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  addPost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { title, img, content } = req.body;
    const { id } = req.params;

    dbInstance
      .add_post([title, img, content, id])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Oops! Something went wrong. Our engineers have been informed!",
          });
        console.log(err);
      });
  },
  get_All_Posts: (req, res) => {
    const db = req.app.get("db");

    db.get_all_posts()
      .then((posts) => res.status(200).send(posts))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Oops! Something went wrong. Our engineers have been informed!",
          });
        console.log(err);
      });
  },
  delete_Post: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_post(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Oops! Something went wrong. Our engineers have been informed!",
          });
        console.log(err);
      });
  },
};
