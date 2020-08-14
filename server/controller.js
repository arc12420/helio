const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const existingUser = await db.check_user(username);
        if(existingUser[0]){
            return res.status(409).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcyrpt.hashSync(password, salt)
        const [newUser] = await db.add_user([username, hash])
        req.session.user = {
            userId: newUser.user_id,
            username: newUser.username
        }
        res.status(200).send(req.session.user)
    }
}




