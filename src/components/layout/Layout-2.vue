<template>
	<div class="layout2" id="#layout2">
		<particles name="pafs"></particles>
		<img class="js-logo" src="img/js-logo.png">
		<img class="html-logo" src="img/html-logo.png">
		<img class="css-logo" src="img/css-logo.png">
		<img class="docker-logo" src="img/docker-logo.png">
		<img class="npm-logo" src="img/npm-logo.png">
		<img class="react-logo" src="img/react-logo.png">
		<img class="vue-logo" src="img/vue-logo.png">
		<img class="node-logo" src="img/node-logo.png">
		<Card-2/>
	</div>
</template>

<script>
	import Card2 from "@/components/layout/card/Card-2";
	import Particles from "@/components/Particles";

	export default {
		name: "Layout-2",
		components: {Particles, Card2}
	}
</script>

<style lang="scss">
	.layout2 {
		z-index: 2;
		background: $BackgroundSecondColor;
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
		box-shadow: 0px 0px 70px 40px black;

		.js-logo {
			width: 10%;
			position: absolute;
			top: 1%;
			left: 15px;
			transform: rotate(12deg);
		}

		.html-logo {
			width: 11%;
			position: absolute;
			top: 1%;
			right: 0px;
			transform: rotate(353deg);
		}

		.css-logo {
			width: 8%;
			position: absolute;
			top: 22%;
			left: 0px;
			transform: rotate(356deg);
		}

		.docker-logo {
			width: 13%;
			position: absolute;
			top: 45%;
			left: -15px;
			transform: rotate(2deg);
		}

		.npm-logo {
			width: 13%;
			position: absolute;
			top: 25%;
			right: 3px;
			transform: rotate(359deg);
		}

		.react-logo {
			width: 15%;
			position: absolute;
			top: 66%;
			left: 0px;
			transform: rotate(355deg);
		}

		.vue-logo {
			width: 13%;
			position: absolute;
			top: 52%;
			right: 20px;
			transform: rotate(4deg);
		}

		.node-logo {
			width: 13%;
			position: absolute;
			top: 73%;
			right: 0px;
		}
	}
</style>