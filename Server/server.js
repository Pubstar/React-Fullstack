const express = require('express');
app = express();
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const userSchema = require('./UserSchema');
mongoose.set('strictQuery', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// connect to mongoDB
mongoose.connect('mongodb+srv://pubstar:test123@react-fullstack.mijotck.mongodb.net/test')
    .then(() => {
        console.log('Connected to DB!');
    })
    .catch(() => {
        console.log('Error connecting to DB');
    })

const User = mongoose.model('User', userSchema);

app.get('/api/getUsers', async (req, res) => {
    let users = await User.find();
    res.send(users);
})

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username });
    if (foundUser) {
        if (await bcrypt.compare(password, foundUser.password)) {
            res.send(foundUser);
        }
        else {
            res.send('incorrect username or password');
        }
    } else {
        res.send('incorrect username or password');
    }
})

app.post('/api/createUser', async (req, res) => {
    const { username, password } = req.body;
    if (await User.findOne({ username })) return res.send({ "result": false, });
    const user = new User({ username, password: await bcrypt.hash(password, 10) });
    user.save((err) => {
        if (err) return res.send({ "result": false });
        res.send({ "result": true, user });
        console.log('User saved to DB!');
    })
})

// Start server
app.listen(5000, () => {
    console.log('Server started on port 5000');
})
