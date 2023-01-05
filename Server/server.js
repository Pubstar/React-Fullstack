const express = require('express');
app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userSchema = require('./UserSchema');
mongoose.set('strictQuery', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post('/api/createUser', async (req, res) => {
    const { name, note } = req.body;
    const user = new User({ user: name, note });
    user.save((err) => {
        if (err) return console.log(err);
        console.log('User saved to DB!');
    })
})


app.listen(5000, () => {
    console.log('Server started on port 5000');
})
