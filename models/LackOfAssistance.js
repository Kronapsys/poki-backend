const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LackOfAssistanceSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    childs: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],

    date: {
        type: Date,
        required: true
    },

    reason: {
        type: String,
    },

    type: [{
        type: Schema.Types.ObjectId,
        ref: 'LackOfAssistanceType'
    }]

});

LackOfAssistanceSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('LackOfAssistance', LackOfAssistanceSchema);