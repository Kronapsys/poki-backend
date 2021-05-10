const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentSchema = new Schema({

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

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    dni: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    isTeacher: {
        type: Boolean,
        default: false,
        required: true
    },

    childs: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],

    notifications: [{
        type: Schema.Types.ObjectId,
        ref: 'Notification'
    }],

    tutorials: [{
        type: Schema.Types.ObjectId,
        ref: 'Tutorial'
    }]

});

ParentSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Parent', ParentSchema);