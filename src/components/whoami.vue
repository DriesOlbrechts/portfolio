<script setup lang="ts">
import VueFeather from 'vue-feather';
</script>

<template>
    <div class="container">
        <div class="main">
            <div class="text">
                <p class="greeting">Hi, my name is</p>
                <h1 class="name">Dries Olbrechts</h1>
                <h1 class="subtitle">A full stack developer</h1>
            </div>
            <div class="icons">
                <a href="https://github.com/Dries1234">
                    <vue-feather type="github"></vue-feather>
                </a>
                <a href="https://www.linkedin.com/in/dries-olbrechts">
                    <vue-feather type="linkedin"></vue-feather>
                </a>
                <a href="mailto:driesolbrechts@gmail.com">
                    <vue-feather type="mail"></vue-feather>
                </a>
            </div>
        </div>
        <div class="arrows">
            <p>scroll down</p>
            <vue-feather type="chevrons-down"></vue-feather>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 470px) {
    .text {
        margin-left: 2rem;
    }
}

.icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin: auto;
    margin-bottom: 1rem;
    width: 20rem;
    margin-top: 5rem;
}

.main {
    margin: auto;
    width: fit-content;
}

.icons>a {
    text-decoration: none;
    color: inherit;
    border-radius: 0.5rem;
}

.icons>a:hover {
    -webkit-filter: drop-shadow(0 0 0.7rem rgb(255, 255, 255));
    filter: drop-shadow(0 0 0.7rem rgb(255, 255, 255));
}

.greeting {
    color: var(--primary-accent);
}

.name {
    font-size: 4rem;
}

.subtitle {
    width: 22rem;
    -webkit-filter: brightness(75%);
    filter: brightness(75%);
    font-size: 2rem;
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.15rem solid var(--primary-accent);
    padding-right: 0.5rem;
    -webkit-animation: typing 2s steps(40, end), blink 1s step-end infinite;
    animation: typing 2s steps(40, end), blink 1s step-end infinite;
}

.arrows>i {
    width: 5rem;
    animation: glowing 1s steps(20) infinite alternate;
    opacity: 75%;
}
.arrows>p{
    opacity: 75%;
}

.arrows {
    position: absolute;
    bottom: 0;
    padding-bottom: 5rem;
}

@-webkit-keyframes typing {
    from {
        width: 0
    }

    to {
        min-width: fit-content;
    }
}

@keyframes glowing {
    from {
        opacity: 40%;
    }

}

@keyframes typing {
    from {
        width: 0
    }
}

@-webkit-keyframes blink {

    50% {
        border-color: transparent;
    }
}

@keyframes blink {

    50% {
        border-color: transparent;
    }
}
</style>
