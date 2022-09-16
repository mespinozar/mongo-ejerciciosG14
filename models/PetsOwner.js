import mongoose from 'mongoose';

//Creacion de Schema
const petsOwners = new mongoose.Schema({
    name: String,
    birthday: Date,
    phone: Number,
    address: String,
    email: String,
    password: String,
    cardNumber: String,
});
export default mongoose.model('PetsOwner',petsOwnersSchema);