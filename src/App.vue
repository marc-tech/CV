<template>
	<div id="app">
		<layout-1/>
		<layout-2/>
		<layout-3/>
		<SideNav/>
	</div>
</template>

<script>
	import SideNav from "@/components/SideNav";
	import Layout1 from "@/components/layout/Layout-1";
	import Layout2 from "@/components/layout/Layout-2";
	import Layout3 from "@/components/layout/Layout-3";
	import Particles from "@/components/Particles";

	export default {
		name: 'app',
		components: {
			Particles,
			Layout1,
			Layout2,
			Layout3,
			SideNav
		},
		mounted() {
			this.calcCardMarginTop();
			window.addEventListener('scroll', () => {
				this.calcCardMarginTop()
			}, {
				capture: true,
				passive: true
			});

		},
		methods: {
			calcCardMarginTop() {
				$('.card1').css({'margin-top': window.scrollY});
				$('.card2').css({'margin-top': window.scrollY - window.innerHeight});
				$('.card3').css({'margin-top': window.scrollY - (window.innerHeight * 2)});
			}
		}
	}
</script>

<style lang="scss">
	#app {
		scroll-behavior: smooth;
		text-align: center;
		height: 100%;
		width: 100%;
	}

	.card1 {
		background: $cardFirstColor;
		border-radius: $cardBorderRadius;
		position: absolute;
		border: 2px solid white;
		box-shadow: 10px 10px 20px 1px #1b1b1b;
		height: $cardHeight;
		width: $cardWidth;
		top: $cardTop;
		left: $cardLeft;
		@media only screen and (max-width : 900px) {
			height: $cardHeightMobile!important;
			width: $cardWidthMobile!important;
			top: $cardTopMobile!important;
			left: $cardLeftMobile!important;
		}
		color: white;
	}

	.card2 {
		background: $cardSecondColor;
		border-radius: $cardBorderRadius;
		position: absolute;
		border: 2px solid black;
		box-shadow: 10px 10px 20px 1px #292929;
		height: $cardHeight;
		width: $cardWidth;
		top: $cardTop;
		left: $cardLeft;
		@media only screen and (max-width : 900px) {
			height: $cardHeightMobile!important;
			width: $cardWidthMobile!important;
			top: $cardTopMobile!important;
			left: $cardLeftMobile!important;
		}
		color: black;
	}

	.card3 {
		background: $cardFirstColor;
		border-radius: $cardBorderRadius;
		position: absolute;
		border: 2px solid white;
		box-shadow: 10px 10px 20px 1px #1b1b1b;
		height: $cardHeight;
		width: $cardWidth;
		top: $cardTop;
		left: $cardLeft;
		@media only screen and (max-width : 900px) {
			height: $cardHeightMobile!important;
			width: $cardWidthMobile!important;
			top: $cardTopMobile!important;
			left: $cardLeftMobile!important;
		}
		color: white;
	}
</style>
