const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncidentReportSchema = new Schema({
    
    childs: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],

    type: [{
        type: Schema.Types.ObjectId,
        ref: 'IncidentReportType'
    }],

    subject: {
        type: String
    },

    treatment: {
        type: String 
    },

    description: {
        type: String,
        required: true
    }

});

IncidentReportSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('IncidentReport', IncidentReportSchema);