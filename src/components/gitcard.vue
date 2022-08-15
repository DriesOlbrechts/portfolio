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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: all ease-in-out 0.1s;
    -o-transition: all ease-in-out 0.1s;
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
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.languages {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    height: 2rem;
    -ms-flex-pack: end;
    justify-content: end;
}

.languages>img {
    padding-left: 1rem;
    width: 2rem;
}

.cardhover {
    width: 100%;
}

a:hover>.card {
    margin-top: -10px;
    margin-bottom: 10px;
    -webkit-box-shadow: 1rem 1rem var(--secondary-accent);
    box-shadow: 1rem 1rem var(--secondary-accent);
}
</style>
