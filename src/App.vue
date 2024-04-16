<script setup>
import Header from './components/Header.vue';
import Movies from './components/Movies.vue';

</script>

<template>
  <div>
    <Header/>
    <Movies />
</div>
</template>

<style scoped>
h1{
  margin: 0;
}
div{
  height: max-content;
  width: 100vw;
  background-image: url('/src/assets/bgsunset.jpg');
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
