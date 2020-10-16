const express = require('express')

const App = express()

App.get('/', (req, res) => {
    res.send('hello world!')
})

App.get('/luna', (req, res) => {
    res.sendFile('luna.jpg')
})

App.delete('/', (req, res) => {
    //do whatever here that deletes stuff
})


App.listen(3000)