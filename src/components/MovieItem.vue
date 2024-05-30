<script setup>
import { ref, onBeforeMount, onUpdated } from 'vue';
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import close from '../assets/close.svg'
const title = ref('')
const movies = ref([])
const movie = ref('')
const id = ref(0)

function moveTo(wiki) {
    window.open(`${wiki}`, "_blank")/* 
    const poster = document.getElementById('img-fondo')
    const section = document.getElementById('Section')
    poster.classList.remove('active')
    section.classList.remove('up') */
}

function isMovieRepeated(m, mList) {
    return mList.some(movie => JSON.stringify(movie.name) === JSON.stringify(m.name));
}

function addMovieWithId(movie, moviesList) {
    const id = moviesList.length + 1;
    return [...moviesList, { ...movie, id }];
}
async function handleFetchResponse(response) {
    if (!response.ok) {
        throw new Error('Error getting movie data.');
    }
    const { rMovie, allMovies } = await response.json();
    return { rMovie, allMovies };
}

async function moviesInit() {
    const dataFetch = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: 'enviando mensaje',
    };
    try {

        const response = await fetch('https://visual.algorithmic-market.com/movies', dataFetch)
        const { rMovie, allMovies } = await handleFetchResponse(response);

        if (isMovieRepeated(rMovie, movies.value) && movies.value.length < allMovies.length) {
            moviesInit()
        }

        else if (movies.value.length >= allMovies.length) {
            return
        }

        else {
            movie.value = rMovie
            movies.value = addMovieWithId(rMovie, movies.value)
            title.value = `${movie.value.name} ${movie.value.fecha}`
            const back = document.getElementById('img-fondo')
            back.style.backgroundImage=`url(${movie.value.img})`
        }

    }
    catch (e) {
        console.log('had an error', e)
    }
}

function closeModal(){
    const section = document.getElementById('Section')
    const poster = document.getElementById('img-fondo')
    poster.classList.toggle('active')
    section.classList.toggle('up')
}

function searchMovie() {
    moviesInit()
}

function rememberMovie() { 
    id.value = movies.value.findIndex( i => i.name == movie.value.name)
    if(id.value > 0){
        id.value = id.value -1
        movie.value = {
            name: movies.value[id.value].name,
            fecha: movies.value[id.value].fecha,
            img: movies.value[id.value].img,
            wiki: movies.value[id.value].wiki
        }
        title.value = `${movie.value.name} ${movie.value.fecha}`
        const back = document.getElementById('img-fondo')
        back.style.backgroundImage=`url(${movie.value.img})`
    }
    else{
        id.value = movies.value.length -1
        movie.value = {
            name: movies.value[id.value].name,
            fecha: movies.value[id.value].fecha,
            img: movies.value[id.value].img,
            wiki: movies.value[id.value].wiki
        }
        title.value = `${movie.value.name} ${movie.value.fecha}`
        const back = document.getElementById('img-fondo')
        back.style.backgroundImage=`url(${movie.value.img})`
    }
}

onBeforeMount(()=>{
    moviesInit()
})

</script>
<template>
    <article id="img-fondo">
        <div >
            <img :src="left" alt="anterior" @click="rememberMovie">
            <p v-html="title" @click="moveTo(movie.wiki)"></p>
            <aside>
                <img :src="close" class="close" @click="closeModal" alt="close modal">
                <img :src="right" alt="proxima" @click="searchMovie">
            </aside>
        </div>
    </article>
</template>
<style scoped>
article{
    border-radius: 8px;
    height: 95vh;
    width: 50vw;
    margin: 0 2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    box-shadow: 0 0 15px #000000;
    border: 1px  solid #fefefe;
    clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);
    transition: clip-path .3s ease-out;
}
div{
    height: 100%;
    width: 100%;
    border-radius: 8px;
    transition: opacity .2s ease;
    display: flex;
    align-items: end;
    background-color: #0000005d;
    justify-content: space-between;
    opacity: 0;
}
div:hover{
    opacity: 1;
}
p{
    font-size: 2rem;
    font-weight: bolder;
    display: flex;
    flex-wrap: wrap;
}
.active{
    clip-path: polygon(0 0, 100% 0, 100% 100%,0 100%);
}
img {
    cursor: pointer;
    transition: all .2s ease;
    height: max-content;
    border-radius: 35px;
    padding: 0 .5rem;
}

img:hover {
    scale: 1.2;
}
aside{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
}
.close{
    transition: all ease .2s;
    height: 3rem;
    width: 3rem;
    border-radius: 0 10px 0 0;
}
.close:hover{
    background-color: #00000059;
    scale: 1;
}
@media(max-width:800px){
    article{
        width: 90vw;
    }
    div p{
        font-size: 1rem;
    }
    div img{
        padding: 0;
        height: 35px;
    }
    .close{
        height: 35px;
        width: 35px;
    }
}
</style>