var mongoose = require('mongoose');
const { DateTime } = require('luxon');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, // Reference to the associated book
        imprint: { type: String, required: true},
        status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'}, 
        due_back: {type: Date, default: Date.now}
    }
);

// Virtual for bookinstance's url
BookInstanceSchema
.virtual('url')
.get(function (){
    return '/catalog/bookinstance/' + this._id;
});

// Virtual for due back date formatted
BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
    return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

BookInstanceSchema.virtual('due_back_yyyy_mm_dd').get(function() {
    return DateTime.fromJSDate(this.due_back).toISODate(); //format 'YYYY-MM-DD'
  });

// Export Model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);