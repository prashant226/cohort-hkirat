// const express = require("express");

// const app = express();

// const zod = require("zod")

// const schema = zod.array(zod.number());

// //email, password, country

// const schema = zod.object({

//     email: zod.string(),
//     password: z.string(),
//     country: z.literal("IN").or(z.literal("USA")),
//     kidneys: z.array(z.number())

// })

// app.use(express.json());

// app.post('/health-checkup', function(req, res) {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)

//     res.send({
//         response
//     })
// });

// app.listen(3000);


const zod = require("zod");

function validateInput(arr) {


    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(arr);
    console.log(response);
}

app.post('/login', function(req, res) {
    const response = validateInput(req.body)
    if (!response.success) {
        res.json({
            msg: "your input are not valid"
        })

        return;
    }

})