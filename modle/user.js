const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    contact: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model("user", UserSchema)