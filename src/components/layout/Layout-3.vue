<template>
	<div class="layout3" id="#layout3">
		<Particles name="particle2"/>
		<Card-3/>
	</div>
</template>

<script>
	import Card3 from "@/components/layout/card/Card-3";
	import Particles from "@/components/Particles";

	export default {
		name: "Layout-3",
		components: {Particles, Card3}
	}
</script>

<style lang="scss">
	.layout3 {
		background: $BackgroundFirstColor;
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}
</style>