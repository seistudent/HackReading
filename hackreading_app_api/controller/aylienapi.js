const express = require('express');
const aylienapi = express.Router();
const Notes = require('../models/notes.js');
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: "eee59153",
    application_key: "abe5c4e741d4ddcf02bef66c00141d73"
});

aylienapi.get('/summarize/:title/:text', (req, res) => {
    console.log("summarize api")
    textapi.summarize({
        'text': req.params.text,
        'title': req.params.title,
        'sentences_number': '2'
    }, function (error, response) {
        if (error === null) {
            console.log("api response", response);
        }
        res.json(response)
    });
});

aylienapi.get('/entities/:text', (req, res) => {
    console.log("entity extraction api")
    textapi.entities({
        'text': req.params.text,
    }, function (error, response) {
        if (error === null) {
            console.log("api response", response);
        }
        res.json(response)
    });
});

module.exports = aylienapi;