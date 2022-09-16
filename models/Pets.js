import mongoose from 'mongoose';

//Creacion de Schema
const pets = new mongoose.Schema({
    name: String,
    birthday: Date,
    type: String,
    breed: String,
    idOwner: Schema.type,
});
export default mongoose.model('Pets',petsSchema);