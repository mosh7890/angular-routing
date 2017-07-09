var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.all('*', function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});