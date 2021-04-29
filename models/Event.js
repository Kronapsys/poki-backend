const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({

    classroom: [{
        type: Schema.Types.ObjectId,
        ref: 'Classroom'
    }],

    date_start: {
        type: Date,
        required: true
    },

    date_end: {
        type: Date,
        required: true
    },

    place: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

});

EventSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Event', EventSchema);