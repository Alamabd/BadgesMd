const express = require("express");
const app = express();

const homepage = require('./route/homepage');
const txt = require('./route/txt');

app.use('/', homepage);

app.use('/', txt);

app.listen(3000, () => {
    console.log("server running in port 3000");
})