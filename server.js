'use strict';

const express = require('express');
const app = express();
const superagent = require('superagent')
const PORT = process.env.PORT||3000;
require('dotenv').config();


app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.static('views'));
app.use('/public', express.static('public'));


app.get('/',(req,res) => {
    // res.status(200).send('book-app');
    res.render('./pages/index')
});

app.get('/books',(req,res)=>{
    const url = `https://www.googleapis.com/books/v1/volumes?q=amman`;
    superagent.get(url)
    .then(data =>{
        console.log(data.body.items);
        res.render('show',{'show': data.body});
    });
});

function Book (data){
    this.image = data.image;
    this.title = data.title;
    this.author = data.author;
    this.description = data.description
}

// function getBookData

// fucntion bookHandler(request , response){
//     let title = request.query['title'];
//     let author = request.query['authors'];

// }



app.post('/book', (req,res) =>{
    // res.render('./pages/index');
    // console.log(req.body);
    // res.sendFile('./index.ejs', {root: './public'});
});
































//==========================================
app.get('*',(req,res) =>{
    res.status(404).send('Not Found');
});

app.listen(PORT,()=>{
    console.log('Listening on PORT 3000');
});