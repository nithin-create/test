const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/all'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected .... ')
})

app.use(express.json())

const allRouter = require('./routes/all')
app.use('/all',allRouter)

app.listen(9000, () => {
    console.log('Server started')
})