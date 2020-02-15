const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    name: String,
    bookTitle: String,
    user: String,
    description: String,
    complete: Boolean
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;