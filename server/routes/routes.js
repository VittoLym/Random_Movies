import { Router } from "express";

const router = Router();

const movies = [
    {
        name: 'Titanic',
        fecha:'(05/02/1998)',
        wiki:'https://es.wikipedia.org/wiki/Titanic_(película_de_1997)',
<<<<<<< HEAD
        img:'/public/movies/titanic.webp'
=======
        img:'/src/assets/Movies/unnamed.webp'
>>>>>>> parent of feb401e (change with movies)
    },
    {
        name: 'El Resplandor',
        fecha:'(25/12/1980)',
        wiki:'https://es.wikipedia.org/wiki/El_resplandor_(película)',
<<<<<<< HEAD
        img:'/public/movies/theshining.webp'
=======
        img:'/src/assets/Movies/TheShining.webp'
>>>>>>> parent of feb401e (change with movies)
    },
    {
        name: 'Taxi Driver',
        fecha:'(8/2/1976)',
        wiki:'https://es.wikipedia.org/wiki/Taxi_Driver',
<<<<<<< HEAD
        img:'/public/movies/taxi-driver.jpg'
=======
        img:'/src/assets/Movies/taxi-driver.jpg'
>>>>>>> parent of feb401e (change with movies)
    },
    {
        name: 'El Gigante de Hierro',
        fecha:'(31/7/1999)',
        wiki:'https://es.wikipedia.org/wiki/El_gigante_de_hierro',
<<<<<<< HEAD
        img:'/public/movies/elgigantedeacero.jpeg'
=======
        img:'/src/assets/Movies/elGiganteDeAcero.jpeg'
>>>>>>> parent of feb401e (change with movies)
    },
    {
        name: 'Relatos Salvaje',
        fecha:'(17/5/2014)',
        wiki:'https://es.wikipedia.org/wiki/Relatos_salvajes',
        img:'/public/movies/relatoSalvaje.jpg'
    }
]

router.get('/bibi',(req, res)=>{res.send('bienvenidos al himalaya')})

router.get('/json',(req,res)=> {res.json({mantequilla: 'Bienvenidon´t al himalaya'})})

router.post('/movies',(req,res)=>{
    function elegirPeliculaAleatoria() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
}

const findRandomMovie = elegirPeliculaAleatoria();
    res.json({
        allMovies: movies,
        rMovie: findRandomMovie
    })
})

export default router