import { Router } from "express";

const router = Router();

const movies = [
    {
        name: 'Titanic',
        fecha:'(05/02/1998)',
        wiki:'https://es.wikipedia.org/wiki/Titanic_(película_de_1997)',
        img:'https://res.cloudinary.com/dim9xwntk/image/upload/v1715217809/images/e9xumdqgvmpcqipb54yk.webp'
    },
    {
        name: 'El Resplandor',
        fecha:'(25/12/1980)',
        wiki:'https://es.wikipedia.org/wiki/El_resplandor_(película)',
        img:'https://res.cloudinary.com/dim9xwntk/image/upload/v1715217777/images/eehpvad0apry7tj4om2y.webp'
    },
    {
        name: 'Taxi Driver',
        fecha:'(8/2/1976)',
        wiki:'https://es.wikipedia.org/wiki/Taxi_Driver',
        img:'https://res.cloudinary.com/dim9xwntk/image/upload/v1715217754/images/y66x74rtzb4yynhvczua.jpg'
    },
    {
        name: 'El Gigante de Hierro',
        fecha:'(31/7/1999)',
        wiki:'https://es.wikipedia.org/wiki/El_gigante_de_hierro',
        img:'https://res.cloudinary.com/dim9xwntk/image/upload/v1715217701/images/kxkw8nu7p4kom1mqhjjl.jpg'
    },
    {
        name: 'Relatos Salvaje',
        fecha:'(17/5/2014)',
        wiki:'https://es.wikipedia.org/wiki/Relatos_salvajes',
        img:'https://res.cloudinary.com/dim9xwntk/image/upload/v1715217736/images/beu7gdyfygfqiubsxghn.jpg'
    }
]
console.log('hola chaval')
router.get('/bibi',(req, res)=>{
    console.log('si llega')
    res.send('bienvenidos al himalaya')
})

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