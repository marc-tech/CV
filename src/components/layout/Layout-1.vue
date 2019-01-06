<template>
	<div class="layout1" id="#layout1">
		<!--<Particles name="particle1"/>-->
		<Card-1/>
	</div>
</template>

<script>
	import Card1 from "@/components/layout/card/Card-1";
	import Particles from "@/components/Particles";

	export default {
		name: "Layout-1",
		components: {Card1, Particles}
	}
</script>

<style lang="scss">
	.layout1 {
		background: $BackgroundFirstColor;
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}
</style>