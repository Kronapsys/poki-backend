const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoolReportColorSchema = new Schema({

    color: {
        type: String,
    }

});

StoolReportColorSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id
        delete obj._id
        delete obj.password
        delete obj.__v
    }
});

module.exports = mongoose.model('StoolReportColor', StoolReportColorSchema);