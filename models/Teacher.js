const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  surname1: {
    type: String,
    required: true,
  },

  surname2: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  dni: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  degrees: [{
      type: String,
      required: true,
    }],

  experience: [{
      type: String,
      required: true,
    }],

  childs: [{
      type: Schema.Types.ObjectId,
      ref: "Child",
    }]  

});

TeacherSchema.set("toJSON", {
  transform: (doc, obj) => {
    obj.id = obj._id;
    delete obj._id;
    delete obj.password;
    delete obj.__v;
  },
});

module.exports = mongoose.model("Teacher", TeacherSchema);