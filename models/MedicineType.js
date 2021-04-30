const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicineTypeSchema = new Schema({

    type: {
        type: String,
        required: true
    }

});

MedicineTypeSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('MedicineType', MedicineTypeSchema);