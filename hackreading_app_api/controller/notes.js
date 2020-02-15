const express = require('express');
const router = express.Router();
const Notes = require('../models/notes.js');

router.get('/', (req, res) => {
    console.log("entering get")
    Notes.find({}, (err, foundNotes) => {
        res.json(foundNotes);
    });
});

router.post('/', (req, res) => {
    console.log("req", req.body)
    Notes.create(req.body, (err, createdNotes) => {
        res.json(createdNotes); //.json() will send proper headers in response so client knows it's json coming back
    });
});

router.delete('/:id', (req, res) => {
    Notes.findByIdAndRemove(req.params.id, (err, deletedNotes) => {
        res.json(deletedNotes);
    });
});

router.put('/:id', (req, res) => {
    Notes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTodo) => {
        res.json(updatedNotes);
    });
});

module.exports = router;