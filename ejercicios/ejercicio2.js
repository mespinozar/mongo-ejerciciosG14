import University from '../models/University.js';

//Create
const create = async () =>{
    try {
        const university = await University.create({
            school: 'University Ontario',
            degree: 'Ingeniere',
            job: 'Developer',
        });
        
    } catch (error) {
        console.log('Error al crear alumno graduado', error);
    }
};

//Read
const read = async () => {
    try {
        const university = await University.find();
        
    } catch (error) {
        console.log('Error al leer alumno');
    }
};

//Update
const update = async () => {
    try {
        
    } catch (error) {
        console.log('Error al actualizar alumno');
    }
};

//Remove
const remove = async () => {
    try {
        
    } catch (error) {
        console.log('Error al eliminar alumno');
    }
};

