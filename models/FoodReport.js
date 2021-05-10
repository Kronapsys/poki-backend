const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodReportSchema = new Schema({

    child: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],

    type: [{
        // type: Schema.Types.ObjectId,
        // ref: 'FoodReportType'
        type: String
    }],

    description: {
        type: String
    },

});

FoodReportSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('FoodReport', FoodReportSchema);