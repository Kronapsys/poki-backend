const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    name: {
        type: String,
        required: true
    }

});

CourseSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Course', CourseSchema);