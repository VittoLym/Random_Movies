<script setup>
function inChangeBackgroundColor() {
    let header = document.querySelector('header');
    header.style.backgroundColor = '#0000001c'
}
function outChangeBackgroundColor() {
    let header = document.querySelector('header');
    header.style.backgroundColor = '#0505057c'
}
function moveToMovies() {
    const section = document.getElementById('Section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        inChangeBackgroundColor()
        const poster = document.getElementById('img-fondo')
        poster.classList.toggle('active')
        section.classList.toggle('up')
    }
    else{
        props.test1(true)
        const poster = document.getElementById('img-fondo')
        poster.classList.add('active')
    }
}

const props = defineProps(['test1'])
</script>
<template>
    <button class="learn-more" @mousemove="inChangeBackgroundColor" @mouseleave="outChangeBackgroundColor" @click="moveToMovies">
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <span class="button-text">Show Random Movie</span>
    </button>
</template>
<style >
button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
 width: max-content;
}
button:focus{
    outline: none;
}

button.learn-more {
 width: 20rem;
 height: auto;
}

button.learn-more .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: #28293683;
 border-radius: 1.625rem;
}

button.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

button.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

button.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.29rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}

button.learn-more .button-text {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 padding: 0.75rem 0;
 margin: 0 0 0 1.85rem;
 color: #ffffff;
 font-weight: 700;
 line-height: 1.6;
 text-align: center;
 text-transform: uppercase;
}

button:hover .circle {
 width: 100%;
}

button:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #fff;
}
</style>