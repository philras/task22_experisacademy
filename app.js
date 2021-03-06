const express = require('express');
var app = express();

var path = require('path');

function person(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}

var data = new Array();

data.push(new person("Philippe", 25, "Super human"));
data.push(new person("Ralf", 31, "Useless human"));

app.use('/static',  express.static('resources'));

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/info', (req, res) => {
 res.sendFile(path.join(__dirname + '/info.html'))
});

app.get('/pictures', (req, res) => {
 res.sendFile(path.join(__dirname + '/pictures.html'))
});

app.get('/data', (req, res) => {
   res.json(data) 
});

app.listen(process.env.PORT || 8080)