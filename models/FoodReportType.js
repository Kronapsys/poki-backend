const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodReportTypeSchema = new Schema({

    type: {
        type: String
    }

});

FoodReportTypeSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('FoodReportType', FoodReportTypeSchema);