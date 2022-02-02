const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    reps: {
        type: String,
        trim: true,
        required: true,

    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dhmopvnqn/image/upload/v1643737393/exercises/dumbbell_b3nkjb.png"
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('exercises', exerciseSchema)