<template>
	<div class="card1 container">
		<div class="row h-100 align-items-center">
			<div class="col-4">
				<div class="avatar">
					<img src="avatar.jpg">
				</div>
			</div>
			<div class="col-8">
				<div class="content">
					<h1>Marc NALPAS</h1>
					<h3>EPITECH Student 2015-2020</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card-1"
	}
</script>

<style lang="scss">
	.card1 {
		height: 100%;
		text-align: left;

		.avatar {
			width: 90%;
			margin: 0 auto;

			img {
				width: 100%;
				border: solid 5px white;
				border-radius: 30px;
				box-shadow: white 0px 0px 10px 2px;
			}
		}

		.content {

		}
	}
</style>