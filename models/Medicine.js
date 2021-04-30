const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicineSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    
    dosis: {
        type: String,
        required: true
    },

    date_start: {
        type: Date,
        required: true
    },

    date_end: {
        type: Date,
        required: true
    },  

    time: {
        type: Date,
        required: true
    },

    type: [{
        type: Schema.Types.ObjectId,
        ref: 'Medicine-Type'
    }]

});

MedicineSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Medicine', MedicineSchema);