<script setup lang="ts">
import { PropType } from 'vue';
import Card from "../models/card";
const props = defineProps({
    data: {
        type: Object as PropType<Card>,
        required: true,
    }
});
</script>

<template>
    <a :href="props.data.link">
            <div class="card">
                <h1 class="title">{{ props.data.title }}</h1>
                <p class="description">{{ props.data.description }}</p>
                <div class="languages">
                    <img v-for="tag in props.data.tags" v-bind:src="tag.icon" :alt="tag.alt" />
                </div>
            </div>
    </a>
</template>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    padding: 0.3rem;
}

.card {
    background-color: var(--main-color);
    width: 100%;
    height: 12rem;
    border-radius: 1.3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all ease-in-out 0.1s;
    border: 0.2rem solid var(--primary-accent);

}

.card>* {
    padding: 1rem;
}

.title {
    color: var(--primary-accent);
    font-size: 1.5rem;
}

.description {
    padding-top: 1rem;
    flex-grow: 1;
}

.languages {
    display: flex;
    flex-direction: row;
    height: 2rem;
    justify-content: end;
}

.languages>img {
    padding-left: 1rem;
}

.cardhover {
    width: 100%;
}

a:hover > .card{
    margin-top: -10px;
    margin-bottom: 10px;
    box-shadow: 1rem 1rem var(--secondary-accent);
}
</style>
