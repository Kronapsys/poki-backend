const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoolReportSchema = new Schema({

    /*child: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }], */
    
    type: [{
        type: Schema.Types.ObjectId,
        ref: 'StoolReportType'
    }],

    color: [{
        type: Schema.Types.ObjectId,
        ref: 'StoolReportColor'
    }],

    blood: {
        type: Boolean,
    },

    parasites: {
        type: Boolean,
    },

    mucus: {
        type: Boolean,
    },

    description: {
        type: String,
    }

});

StoolReportSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('StoolReport', StoolReportSchema);