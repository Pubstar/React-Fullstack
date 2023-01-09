const express = require('express');
app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userSchema = require('./UserSchema');
mongoose.set('strictQuery', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/FullstackDB')
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
    const user = await User.findOne({ username, password });
    res.send(user);
})

app.post('/api/createUser', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    user.save((err) => {
        if (err) return console.log(err);
        console.log('User saved to DB!');
    })
})

// Start server
app.listen(5000, () => {
    console.log('Server started on port 5000');
})
