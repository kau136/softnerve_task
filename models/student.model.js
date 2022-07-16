import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  rollnumber: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  stream:{
    type: String,
    required: true
  }
});

export const Student = mongoose.model('Student', studentSchema)


