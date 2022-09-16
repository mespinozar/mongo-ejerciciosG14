import Movie from '../models/Movie.js';

//Create

const create = async () => {
    try {
        const movie = await Movie.create({
            cast: ['Pedro1','Pedro2'],
            description: 'Drama',
            genre: 'Terror',
            title: 'La Danza',
        });
        console.log(movie);
    } catch (error) {
        console.error('Error al crear pelicula');
    }
};

//Read

const read = async () => {
    try {
        const movies = await Movie.find();
        console.log(movies); 
    } catch (error) {
        console.error('Error al leer pelicula')  
    }
};

//Update

const update = async () => {
    try {
        Movie.updateMany(
            {
                title: 'La Danza',
                genre: 'Terror',
            },
            {
                cast: ['Pedro1'],
                genre: 'Comedy',
            }
            );
    } catch (error) {
        console.error('Error al actualizar pelicula');
    }
};

//Remove

const remove = async () => {
    try {
        Movie.deleteMany({});
        console.log('deleted');
    } catch (error) {
        console.error('Error al borrar Pelicula');
    }
};

export {create, read, update, remove};


