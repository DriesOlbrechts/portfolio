<script setup lang="ts">
import Gitcard from './gitcard.vue';
import {Cards, Categories} from '../static/cards'
</script>

<template>
        <div class="container">
            <div class="column">
                <div class="columntitle">
                    <h1>Web Development</h1>
                </div>
                <Gitcard v-for="card in Cards.filter(c => c.category == Categories.WEBDEV)" :data="card"></Gitcard>
            </div>
            <div class="column">
                <div class="columntitle">
                    <h1>Terminal</h1>
                </div>
                <Gitcard v-for="card in Cards.filter(c => c.category == Categories.TERMINAL)" :data="card"></Gitcard>
            </div>
            <div class="column">
                <div class="columntitle">
                    <h1>Other</h1>
                </div>
                <Gitcard v-for="card in Cards.filter(c => c.category == Categories.OTHER)" :data="card"></Gitcard>
            </div>
        </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    padding-top: 5rem;
    box-sizing: border-box;
    flex-wrap: wrap;
}

.column {
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 18%;
    min-width: 20rem;
}

.column>* {
    margin: 1rem;
}

.columntitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
    font-size: 2rem;
    border-bottom: .1rem solid;
}


</style>
