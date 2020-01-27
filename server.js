/* eslint-disable */
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static('.')); // servidor de estaticos como http-server
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});

app.listen(PORT, () => {
    console.log('listening....');
});