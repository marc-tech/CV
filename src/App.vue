<template>
	<div id="app">
		<div class="b1">
			<div class="c1">
				<card-1/>
			</div>
		</div>
		<div class="b2">
			<div class="c2">
				<card-2/>
			</div>
		</div>
		<div class="b3">
			<div class="c3">
				<card-3/>
			</div>
		</div>
	</div>
</template>

<script>
	import Card1 from "@/components/Card-1";
	import Card2 from "@/components/Card-2";
	import Card3 from "@/components/Card-3";

	export default {
		name: 'app',
		components: {
			Card3,
			Card2,
			Card1,
		},
		mounted() {
			this.calcCardMarginTop();
			window.addEventListener('scroll', () => {
				this.calcCardMarginTop()
			});
		},
		methods: {
			calcCardMarginTop() {
				$('.c1').css({'margin-top': window.scrollY + 200});
				$('.c2').css({'margin-top': window.scrollY - window.innerHeight + 200});
				$('.c3').css({'margin-top': window.scrollY - (window.innerHeight * 2) + 200});
			}
		}
	}
</script>

<style>
	body, html, #app {
		scroll-behavior: smooth;
		text-align: center;
		height: 100%;
		width: 100%;
	}

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
		border-radius: 15px;
		box-shadow: 10px 10px 50px 10px #1b1b1b;
		left: 20%;
		height: 50%;
		width: 60%;
		background: black;
		color: white;
	}

	.c2 {
		position: absolute;
		border-radius: 15px;
		box-shadow: 10px 10px 50px 10px #292929;
		left: 20%;
		height: 50%;
		width: 60%;
		background: white;
		color: black;
	}

	.c3 {
		position: absolute;
		border-radius: 15px;
		box-shadow: 10px 10px 50px 10px #1b1b1b;
		left: 20%;
		height: 50%;
		width: 60%;
		background: black;
		color: white;
	}
</style>
