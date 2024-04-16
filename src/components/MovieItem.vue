<script setup>
import { ref, onUpdated, onMounted, computed } from 'vue';
const props = defineProps(['name', 'fecha'])
const name = ref(props.name) 
const fecha = ref(props.fecha) 
const title = ref('Titanic (05/02/1998)')
function moveTo() {
    window.open("https://es.wikipedia.org/wiki/Titanic_(película_de_1997)", "_blank")
}
onMounted(()=>{
    console.log(title.value)
    console.log(name.value)
})
onUpdated(()=>{
    console.log(name.value)
    console.log(props.fecha)
    if(props.name && props.fecha){
        title.value = `${props.name} ${props.fecha}`
        console.log(title.value)
    }
})
</script>
<template>
    <article>
        <div @click="moveTo">
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
    background-image: url('/src/assets/Movies/unnamed.webp');
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