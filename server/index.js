require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app =express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const controller = require('./controller');

app.use(express.json());
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log(`The db is set`);
});

app.get('/houses', controller.getAllHouses);
app.post('/houses/add', controller.addHouse);
app.delete('/houses/:id', controller.deleteHouse);

app.listen(SERVER_PORT, () => console.log(`The server is listening on port ${SERVER_PORT}`));