const express = require('express')
const app = express()
const port = 3000


app.post('/conversation', (req, res) => {
    console.log(req.headers["authorization"])
    res.send({
        msg: "2+2==4"
    })
})


app.listen(port)