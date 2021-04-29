const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllergySchema = new Schema({

    name: {
        type: String,
        required: true
    },
    
    medication: {
        type: String,
    },

    type: [{
        type: Schema.Types.ObjectId,
        ref: 'AllergyType'
    }]

});

AllergySchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Allergy', AllergySchema);