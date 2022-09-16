import mongoose from 'mongoose';

//Creacion de Schema
const universitySchema = new mongoose.Schema({
    school: String,
    degree: String,
    job: String,
  });
  
  export default mongoose.model('Univrsity', universitySchema);