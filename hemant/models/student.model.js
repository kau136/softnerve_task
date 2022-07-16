import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema();

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

export default mongoose.model('Student', studentSchema)


