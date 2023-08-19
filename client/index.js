const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function () {
    console.log("client is listening on 8000");
});