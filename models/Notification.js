const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({

    date: {
        type: Date,
        required: true
    },
    
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    parents: [{
        type: Schema.Types.ObjectId,
        ref: 'Parent'
    }],

    teacher: [{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }],

    read: {
        type: Boolean
    }

});

NotificationSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Notification', NotificationSchema);