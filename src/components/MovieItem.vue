<script setup>
import { ref, onUpdated } from 'vue';
const props = defineProps(['movies','movie',])
const title = ref('')
function moveTo(wiki) {
    window.open(`${wiki}`, "_blank")
}
onUpdated(()=>{
    title.value = `${props.movie.name} ${props.movie.fecha}`
    const back = document.getElementById('img-fondo')
    back.style.backgroundImage =`url(${props.movie.img})`
})
</script>
<template>
    <article id="img-fondo">
        <div @click="moveTo(props.movie.wiki)">
            <p v-html="title"></p>
        </div>
    </article>
</template>
<style scoped>
article{
    border-radius: 8px;
    height: 80vh;
    width: 60vw;
    margin: 0 2rem;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    box-shadow: 0 0 10px #0000008e;
}
div{
    height: 100%;
    width: 100%;
    background-color: #0000005d;
    border-radius: 8px;
    transition: opacity .2s ease;
    display: flex;
    align-items: end;
    justify-content: center;
    opacity: 0;
}
div:hover{
    opacity: 1;
}
p{
    font-size: 2rem;
    font-weight: bolder;
}
</style>