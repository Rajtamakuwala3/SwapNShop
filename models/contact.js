// contacts.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
