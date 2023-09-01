<script setup lang="ts">
import Whoami from './whoami.vue';
import Projects from './projects.vue';
</script>

<template>
    <div class="container" id="scroller">
        <section>
            <Whoami></Whoami>
        </section>
        <section>
            <Projects></Projects>
        </section>
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
}

.container>section {
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: contain;
	scroll-snap-align: start;
	transition-duration: 1s;
}

.container>section:nth-of-type(1) {
    background-image: url("../assets/waves.svg");
    background-size: cover;
}

.container>section:nth-of-type(2) {
    --background: #6d1d3e;
    --background-darker: #3a0017;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(30%, var(--background)), to(var(--background-darker)));
    background: -o-linear-gradient(var(--background) 30%, var(--background-darker));
    background: linear-gradient(var(--background) 30%, var(--background-darker));
}
</style>
