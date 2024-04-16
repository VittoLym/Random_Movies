<script setup>
</script>
<template>
    <article>
        <div>
            <p>Titanic</p>
        </div>
    </article>
</template>
<style scoped>
article{
    border-radius: 8px;
    height: 80vh;
    width: 60vw;
    margin: 0 1rem;
    background-image: url('./src/assets/movies/unnamed.webp');
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