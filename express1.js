const express = require('express')
const app = express();

app.get('/', function(req, res) {
    res.send("hi there");

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