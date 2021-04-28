const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChildSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    
    surname1: {
        type: String,
        required: true
    },

    surname2: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    parents: [{
        type: Schema.Types.ObjectId,
        ref: 'Parent'
    }],

    classroom: [{
        type: Schema.Types.ObjectId,
        ref: 'Classroom'
    }],

    teacher: [{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }],

    allergies: [{
        type: Schema.Types.ObjectId,
        ref: 'Allergy'
    }],

    medicines: [{
        type: Schema.Types.ObjectId,
        ref: 'Medicine'
    }],

    lackOfAssistance: [{
        type: Schema.Types.ObjectId,
        ref: 'LackOfAssistance'
    }],

    foodReport: [{
        type: Schema.Types.ObjectId,
        ref: 'FoodReport'
    }],

    incidentReport: [{
        type: Schema.Types.ObjectId,
        ref: 'IncidentReport'
    }],

    stoolReport: [{
        type: Schema.Types.ObjectId,
        ref: 'StoolReport'
    }],

    tutorial: [{
        type: Schema.Types.ObjectId,
        ref: 'Tutorial'
    }]

});

ChildSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Child', ChildSchema);