const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/fitapp')

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2
        })

        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'nok' })
    }

})
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if (user) {
        const token = jwt.sign({
            username: req.body.username,

        }, 'secret123')
        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'nok', user: false })
    }
})
app.get('/api/quote', async (req, res) => {

    const token = req.headers['x-access-token'];
    try {
        const decoded = jwt.verify(token, 'secret123')
        const username = decoded.username;
        const user = await User.findOne({ username: username })

        return { status: 'ok', quote: user.quote }
    }
    catch (error) {
        console.log(error)
        res.json({ status: 'erorr', error: 'invalid token' })
    }
})
app.post('/api/quote', async (req, res) => {

    const token = req.headers['x-access-token'];
    try {
        const decoded = jwt.verify(token, 'secret123')
        const username = decoded.username;
        const user = await User.updateOne({ username: username }, { $set: { quote: req.body.quote } })

        return { status: 'ok' }
    }
    catch (error) {
        console.log(error)
        res.json({ status: 'erorr', error: 'invalid token' })
    }
})
app.listen(1337, () => { console.log('server') })