import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import nodemon from "nodemon"
import express from "express"
import mongoose from "mongoose"
import react from "react"
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("hey bub!"));

app.listen(port, () => console.log(
    `listening on port ${port}!`
));

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})
