var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Genre = new Schema(
    {
        name: {type: String, enum: ['Fiction', 'Non Fiction', 'Romance', 'Military History', 'Fantasy', 'Science Fiction', 'French Poetry'], maxLength: 100, minLength:3}
    }
);

// virtual for url
Genre
.virtual("url")
.get(() => {
    return '/cataolog/genre/' + this._id;
});

// Export the model
module.exports = mongoose.model("Genre", Genre);


