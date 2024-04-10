//Middle-ware

const express = require('express')
const app = express();
const port = 3000;


// function userMiddleware(req, res, next) {
//     if (username != "harkirat" && password != "pass") {
//         res.status(403).json({
//             msg: "incorrect inputs"
//         });
//     } else {
//         next();
//     }
// };

// function kidneyMiddleware(req, res, next) {
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(403).json({
//             msg: "incorrect inputs"
//         });
//     } else {
//         next();
//     }
// }

app.use(express.json());

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have" + kidneyLength);
});


app.use(error, req, res, next) {
    res.status(404).send("something worng with ur code");

}





// app.get('/health-checkup', function(req, res) {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "harkirat" && password != "pass") {
//         res.status(400).json({ "msg": "something up with ur inputs" })
//         return
//     }



//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({ "msg": "something up with ur inputs" })
//         return
//     }

//     res.json({
//         msg: "your kidney is true"
//     })



//     // res.status(400).json({ "msg": "Something up with your inputs" })





//     if (username != 'harkirat' && password != 'pass') {
//         res.status(403).json({
//             msg: "user doesn't exist"
//         });
//         return;
//     }
// })

// if (kidneyId != 1 && kidneyId != 2) {
//     res.status(411).json({
//         msg: "wrong inputs"
//     });
//     return;


app.listen(3000)