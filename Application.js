const express = require('express');


const app = express();

// middlewares
app.use(express.json(), express.urlencoded({ extended: true }));





module.exports = app;