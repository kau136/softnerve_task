import { Student } from '../models/student.model.js'

export const addDetailsController = async (req, res, next) => {
  const {
    rollnumber,
    name,
    stream,
    gender
  } = req.body;

try {  
  const student = new Student({
    rollnumber : rollnumber,
    name : name,
    gender : gender,
    stream : stream,
  });
  
  await student.save();
  return res.status(200).json({ message: "Data Saved Successfully", data: student })

  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: error})
  }
}


export const readDetailsController = async (req, res, next) => {
  const {
    id
  } = req.params;

try {  
  const student = await Student.findOne({ id : id })
  if(!student){
    return res.status(404).json({ message: "No record found", data: null })
  }
  
  return res.status(200).json({ message: "Record found", data: student })

  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: error})
  }
  
}


export const updateDetailsController = async (req, res, next) => {
  const {
    id
  } = req.params;

try {  
  const student = await Student.findByIdAndUpdate({ 
    rollnumber : rollnumber,
    name : name,
    gender : gender,
    stream : stream
  });
  if(!student){
    return res.status(404).json({ message: "No record found", data: null })
  }
  
  return res.status(200).json({ message: "Record found", data: student })

  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: error})
  }
  
  
}


export const deleteDetailsController = async (req, res, next) => {
  const {
    id
  } = req.params;

try {  
  const student = await Student.findByIdAndRemove({ id : id });
  if(!student){
    return res.status(404).json({ message: "No record found", data: null })
  }
  
  return res.status(200).json({ message: "Record found", data: student })

  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: error})
  }
  
}
