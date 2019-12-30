'use strict';

const express = require('express');
const app = express();
const superagent = require('superagent')
const PORT = process.env.PORT||3000;
require('dotenv').config();


app.set('view engine','ejs');
// app.use(express.urlencoded());
app.use(express.static('views'));
app.use('/public', express.static('public'));


app.get('/',(req,res) => {
    // res.status(200).send('book-app');
    res.render('./pages/index')
});

app.get('/book', (req,res) =>{
    res.render('./pages/index');
});




























//==========================================
app.get('*',(req,res) =>{
    res.status(404).send('Not Found');
});

app.listen(PORT,()=>{
    console.log('Listening on PORT 3000');
});