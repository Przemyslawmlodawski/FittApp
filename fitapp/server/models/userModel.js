const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,

    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true

    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
    },
    role: {
        type: Number,
        default: 0 // 0 == user
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dhmopvnqn/image/upload/v1642001106/avatar/user_qjklun.png"
    },
    visits: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)