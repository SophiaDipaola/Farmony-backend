const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    farmer: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;