//To run use $ node server.js

const express = require('express');
const app = express();
const port = 3500;

app.use(express.static(__dirname + '/src'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log("Server express ready");
});