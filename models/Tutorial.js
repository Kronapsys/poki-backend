const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TutorialSchema = new Schema({

    child: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }], 

    planned_day: {
        type: Date,
        require: true
    }


});

TutorialSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('Tutorial', TutorialSchema);