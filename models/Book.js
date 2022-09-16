import mongoose from 'mongoose';

//Creacion de Schema
const bookSchema = new mongoose.Schema({
  author: String,
  titles: String,
  editorial: String,
  publishDate: Date,
  pages: Number,
  isbn: String,
  price: Number,
});

export default mongoose.model('book', bookSchema);

