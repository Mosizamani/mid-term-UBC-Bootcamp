const mongoose = require('mongoose');

const NoteTakingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const NoteTaking = mongoose.model('NoteTaking', NoteTakingSchema);

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        requires: true
    },
    passwordSalt: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }, 
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastLoginDate: {
        type: Date
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = { NoteTaking, User }

