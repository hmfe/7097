var mongoose = require('mongoose');

module.exports = mongoose.model('Keyword', {
    text: {
        type: String,
        default: ''
    }
});