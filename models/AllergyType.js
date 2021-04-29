const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllergyTypeSchema = new Schema({

    type: {
        type: String,
        required: true
    }

});

AllergyTypeSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('AllergyType', AllergyTypeSchema);