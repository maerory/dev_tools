const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '<your-app-id>',
    key: '<your-app-key>',
    secret: '<your-app-secret>',
    cluster: '<your-app-cluster>',
    encrypted: true,
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));