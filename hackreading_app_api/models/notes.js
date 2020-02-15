const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    noteName: String,
    bookTitle: String,
    noteCreator: String,
    noteContent: String,
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;