const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path')
const app = express()

app.get('/file', function(req, res) {
    console.log("Reauest Made for body_battery.csv")
    res.sendFile(path.join(__dirname,'../data/body_battery.csv'))
})

app.listen(3000, () => console.log('Server listening on port 3000'))