import Pets from '../models/Pets.js';
import PetsOwner from '../models/PetsOwner.js';

//Create
const create = async () => {
    try {
        const pets= await Pets.create({
            name: 'Jose',
            birthday: '25/05/2000',
            phone: '123',
            address: 'Las lomas 111',
            email: 'kkk@gmail.com',
            cardNumber: '258258',
        });
        
    } catch (error) {
        console.error('Error al crear mascota');
    }
};

//Read
const read = async () => {
    try {
        
    } catch (error) {
        console.error('Error al leer mascota');
    }
};

//Update
const update = async () => {
    try {
        
    } catch (error) {
        console.error('Error al actualizar mascota');
    }
};

//Delete
const remove = async () => {
    try {
        
    } catch (error) {
        console.error('Error al eliminar mascota');
    }
};