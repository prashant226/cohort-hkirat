const express = require('express')
const app = express();
const port = 3000;


const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]

}];
// function sum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }
app.get('/', function(req, res) {
    // const n = req.query.n;
    // const ans = sum(n)
    // res.send("hi there ur ans is " + ans);
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfhealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy)
            numberOfhealthyKidneys = numberOfhealthyKidneys + 1;

    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfhealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfhealthyKidneys,
        numberOfUnhealthyKidneys
    })
})




app.listen(3000);




// function calculateSum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;

//     }
//     return ans;
// }

// const app = express();

// app.get("/", function(req, res) {
//     const n = req.query.n;
//     const ans = calculateSum(n)
//     res.send(ans.toString());
// })

// app.listen(3000);