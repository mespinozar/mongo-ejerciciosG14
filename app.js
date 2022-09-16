import mongoose from "mongoose";
import Book from './models/Book.js';
import {} from './ejercicios/ejercicio1.js';

mongoose.connect(
'mongodb+srv://admin1:57s2OelrrKaGP7CO@cluster0.aeqicgq.mongodb.net/?retryWrites=true&w=majority',
async () => {
    console.log('Se ha conectado a la base de datos');
    //Create
    const book = await Book.create({
        author: 'Jose',
        editorial: 'Vega',
        isbn: '258258',
        pages: 150,
        price: 50,
        publishDate: new Date(),
        titles: ' La Noche mas fria',
    });
    console.log(book);

    //Read

    const books = await Book.find();
    console.log(books);

    //Update

    const updatedBook = await Book.findByIdAndUpdate(
        '632138eb2bccca009cf7860b',
    {
        author: 'Alissia',
    },
    { 
        new: true,
    }
    );
    console.log('Libro actualizado', updatedBook);

    //Delete

    const deletedBook = await Book.findByIdAndDelete(
        '632138eb2bccca009cf7860b',
        {
            price: 50,
        },
        );
        console.log('Se elimino dato', deletedBook);

        await movieCrud.create();
        await movieCrud.read();
        await movieCrud.update();
        await movieCrud.remove();
}
);

