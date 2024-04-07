const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


app.use(bodyParser.json());




app.post('/', (req, res) => {
    console.log(req.body);

    res.send('hello world')
})


app.listen(port)