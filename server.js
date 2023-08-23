const app = require('./Application.js')

const http = require('http');

const express = require('express')


const router = require('./routers/route.js');

const { Sequelize, sequelize } = require('./models/index.js');


// const Sequelize = require('./models/user');

// app.use('/admin/user', router)

app.use(router)

const server = http.createServer(app);

// create function  to synchronise datbase


const syncDatabase = async () => {
    await sequelize.sync({ alter: true })

}




server.listen({ port: 4000 }, async () => {

    console.log(`server listening on port http://localhost:4000 `);
    // console.log(app, router)
    await syncDatabase()
    // console.log(`database synced successfully`)

    // console.log(fn);

});

