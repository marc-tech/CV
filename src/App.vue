<template>
	<div id="app">
		<div id="#card1" class="b1">
			<div class="c1">
				<card-1/>
			</div>
		</div>
		<div id="#card2" class="b2">
			<div class="c2">
				<card-2/>
			</div>
		</div>
		<div id="#card3" class="b3">
			<div class="c3">
				<card-3/>
			</div>
		</div>
		<SideNav/>
	</div>
</template>

<script>
	import Card1 from "@/components/Card-1";
	import Card2 from "@/components/Card-2";
	import Card3 from "@/components/Card-3";
	import SideNav from "@/components/SideNav";

	export default {
		name: 'app',
		components: {
			SideNav,
			Card3,
			Card2,
			Card1
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
				$('.c1').css({'margin-top': window.scrollY});
				$('.c2').css({'margin-top': window.scrollY - window.innerHeight});
				$('.c3').css({'margin-top': window.scrollY - (window.innerHeight * 2)});
			}
		}
	}
</script>

<style lang="scss">
	body, html, #app {
		scroll-behavior: smooth;
		text-align: center;
		height: 100%;
		width: 100%;
	}

	h1, h2, h3, h4, h5, h6, p, a, span, li {
		font-family: "Montserrat" !important;
	}

	@media screen and (max-width: 900px) {
		h1 {
			font-size: 22px !important;
		}

		h2 {
			font-size: 20px !important;
		}

		h3 {
			font-size: 18px !important;
		}

		h4 {
			font-size: 16px !important;
		}

		h5 {
			font-size: 14px !important;
		}

		h6 {
			font-size: 12px !important;
		}

		a {
			font-size: 14px !important;
		}
	}

	$cardWidth: 60%;
	$cardHeight: 55%;
	$cardTop: 22%;
	$cardLeft: 20%;
	$cardWidthMobile: 80%;
	$cardHeightMobile: 70%;
	$cardTopMobile: 15%;
	$cardLeftMobile: 10%;
	$cardBorderRadius: 20px;

	.b1 {
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}


	.b2 {
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
		background: black;
		box-shadow: 0px 0px 70px 40px black;
	}

	.b3 {
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}

	.c1 {
		position: absolute;
		border-radius: $cardBorderRadius;
		border: 2px solid white;
		box-shadow: 10px 10px 50px 10px #1b1b1b;
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
		background: black;
		color: white;
	}

	.c2 {
		position: absolute;
		border-radius: $cardBorderRadius;
		border: 2px solid black;
		box-shadow: 10px 10px 50px 10px #292929;
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
		background: white;
		color: black;
	}

	.c3 {
		position: absolute;
		border-radius: $cardBorderRadius;
		border: 2px solid white;
		box-shadow: 10px 10px 50px 10px #1b1b1b;
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
		background: black;
		color: white;
	}
</style>
