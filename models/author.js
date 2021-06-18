var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name : {type: String, required: true, maxLength: 100},
        family_name : {type: String, required: true, maxLength: 100},
        dob : {type: Date},
        dod: {type: Date},
    }
);


// virtual for author's full name;
AuthorSchema
.virtual("name")
.get(() => {
    return this.first_name + ", " + this.family_name;
});

// virual for lifespan
AuthorSchema
.virtual("lifespan")
.get(() => {
    return this.dob.getYear() - this.dod.getYear();
});

// virtual for authors url
AuthorSchema
.virtual("url")
.get(() => {
    return '/catalog/author/' + this._id;
});

// Export the model
module.exports = mongoose.model('Author', AuthorSchema);


