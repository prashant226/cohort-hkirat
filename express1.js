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

//query parameter


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

app.use(express.json());

app.post('/', function(req, res) {
    //adding a unhealthy kideney
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done bro"
    })


})

//update all unhealthy kidneys
app.put('/', function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;

    }
    res.json({});
})



//we will remove all unhealthy kidenys
app.delete('/', function(req, res) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys.healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
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