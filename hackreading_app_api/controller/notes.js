const express = require('express');
const router = express.Router();
const Notes = require('../models/notes.js');
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: "eee59153",
    application_key: "abe5c4e741d4ddcf02bef66c00141d73"
});

router.get('/', (req, res) => {
    console.log("entering get")
    Notes.find({}, (err, foundNotes) => {
        res.json(foundNotes);
    });
});

router.get('/:id', (req, res) => {
    console.log("get by id")
    Notes.findById(req.params.id, (err, foundNote) => {
        res.json(foundNote);
    });
});

router.post('/', (req, res) => {
    console.log("req", req.body)
    Notes.create(req.body, (err, createdNotes) => {
        console.log('creatednote is', createdNotes)
        res.json(createdNotes); //.json() will send proper headers in response so client knows it's json coming back
    });
});

router.delete('/:id', (req, res) => {
    Notes.findByIdAndRemove(req.params.id, (err, deletedNotes) => {
        res.json(deletedNotes);
    });
});

router.put('/:id', (req, res) => {
    Notes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedNote) => {
        res.json(updatedNote);
    });
});

module.exports = router;