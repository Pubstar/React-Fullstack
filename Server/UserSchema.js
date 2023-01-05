const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: String,
    note: String
});

module.exports = UserSchema;