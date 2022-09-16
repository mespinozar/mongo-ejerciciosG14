import mongoose from 'mongoose';

//Creacion de Schema
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  cast: [String],
  description: String,
});

export default mongoose.model('Movie', movieSchema);
