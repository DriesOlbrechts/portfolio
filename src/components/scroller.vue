<script setup lang="ts">
import Whoami from './whoami.vue';
import Projects from './projects.vue';
</script>

<template>
    <div class="container" id="scroller">
        <div>
            <Whoami></Whoami>
        </div>
        <div>
            <Projects></Projects>
        </div>
    </div>
</template>
<script lang="ts">
import createScrollSnap from 'scroll-snap'

export default {
    data() {
        return {
            scrolled: ''
        }
    },
    mounted() {

        this.$nextTick(() => {
            const element = document.getElementById('scroller')

            const { bind, unbind } = createScrollSnap(element!, {
                snapDestinationY: '100%',
                timeout: 0,
                duration: 300,
                threshold: 0.01,
                snapStop: false,
            }, () => console.log('snapped'))
        });
    },
}

</script>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.container>div {
    display: -webkit-box;
    display: -ms-flexbox;
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
}

.container>div:nth-of-type(1) {
    background-image: url("../assets/waves.svg");
    background-size: cover;
}

.container>div:nth-of-type(2) {
    --background: #6d1d3e;
    --background-darker: #3a0017;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(30%, var(--background)), to(var(--background-darker)));
    background: -o-linear-gradient(var(--background) 30%, var(--background-darker));
    background: linear-gradient(var(--background) 30%, var(--background-darker));
}
</style>
