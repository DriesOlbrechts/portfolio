<script setup lang="ts">
import VueFeather from 'vue-feather';

function scroll() {
	const element = document.getElementById("projects")
	element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

</script>

<template>
	<div class="container">
		<div class="main">
			<div class="text">
				<p class="greeting">Hi, my name is</p>
				<h1 class="name">Dries Olbrechts</h1>
				<h1 class="subtitle">Full stack developer</h1>
			</div>
			<div class="icons">
				<a href="https://github.com/DriesOlbrechts">
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
			<vue-feather type="chevrons-down" @click="scroll"></vue-feather>
			<p> Click me! </p>
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
	width: 100%;
	-webkit-filter: brightness(75%);
	filter: brightness(75%);
	font-size: 2rem;
	overflow: hidden;
	white-space: nowrap;
	position: relative;
	-webkit-animation: typing 2s steps(40, end), blink 1s step-end infinite;
	animation: typing 2s steps(40, end), blink 1s step-end infinite;
}

.subtitle::after {
	content: "";
	display: inline-block;
	vertical-align: middle;
	width: 0;
	height: 0.8em;
	margin-left: 0.3em;
	border: 1px solid white;
	animation: typing 2s linear forwards, blink 1s step-end infinite;
}



.arrows>i {
	width: 5rem;
	animation: glowing 1s steps(20) infinite alternate;
	opacity: 75%;
}

.arrows>p {
	opacity: 75%;
	animation: glowing 1s steps(20) infinite alternate;
}

.arrows {
	position: absolute;
	bottom: 0;
	padding-bottom: 5rem;
	text-align: center;
}

.arrows>i:hover {
	animation-play-state: paused;
	opacity: 100% !important;
	cursor: pointer;
}

.arrows>i:hover+p {
	animation-play-state: paused;
	opacity: 100% !important;
	cursor: pointer;
}


@-webkit-keyframes typing {
	from {
		width: 0
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
