const express = require("express");
const app = express();

//db
const dbConnect = require("./connectMongodb");

//env
require('dotenv').config();

app.get("/:id", (req, res) => {
    res.send("hello world" + req.params.id)
})

app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
})


app.listen(process.env.PORT, () => {
    dbConnect(process.env.URL)
        .then(() => console.log('db connected'))
        .then(() => console.log(`server is live on ${process.env.PORT}`))
        .catch((err) => console.log(err))
})

const express = require()