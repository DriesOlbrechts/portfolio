<script setup lang="ts">
import Whoami from './whoami.vue';
import Projects from './projects.vue';
</script>

<template>
    <div class="container">
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
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
}

.container>section {

    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.container>section:nth-of-type(1) {
    background-image: url("../assets/waves.svg");
}

.container>section:nth-of-type(2) {
    --background: #6d1d3e;
    --background-darker: #3a0017;
    background: linear-gradient(var(--background) 30%, var(--background-darker));
}
</style>
