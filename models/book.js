var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}, // Ref the author model object
        summary: {type: String, required: true},
        isbn: {type: String, required: true},
        genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}] // Ref the genre model object
    }
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function () {
    return '/catalog/book/' + this._id;
});

// Export Model
module.exports = mongoose.model('Book', BookSchema);