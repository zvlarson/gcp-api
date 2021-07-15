const functions = require("firebase-functions");
const express = require('express')

const app = express()

app.get('/baseballteams', (req, res) => {
    res.send('Ummm...the Yankees?')
})

app.get('/basketball', (req, res) => {
    res.send('Ummm...the Knicks?')
})


exports.app = functions.https.onRequest((app))
