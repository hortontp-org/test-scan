const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('index');
    res.send('index');
})

app.listen(3000)