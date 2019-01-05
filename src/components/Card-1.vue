<template>
	<div class="card1 container">
		<div class="row h-100 align-items-center">
			<div class="col-lg-4 col-md-12">
				<div class="avatar">
					<img src="avatar.jpg">
				</div>
			</div>
			<div class="col-lg-8 col-md-12">
				<div class="content">
					<h1>Marc NALPAS</h1>
					<h3>Full stack developer</h3>
					<div class="d-flex justify-content-center">
						<h5><a href="mailto:marc.nalpas@epitech.eu" id="email">marc.nalpas@epitech.eu</a></h5>
						<div class="d-flex copy" v-on:click="copyText">
							<i class="far fa-copy copyIcon"></i>
							<span class="copyTip">Copy to clipboard</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<p class="binary">01001101 01100001 01110010 01100011 00100000 01001110 01000001 01001100 01010000 01000001 01010011</p>
	</div>
</template>

<script>
	export default {
		name: "Card-1",
		methods: {
			copyText() {
				var $tmp = $("<input>");
				$("body").append($tmp);
				$tmp.val($('#email').text()).select();
				document.execCommand("copy");
				$tmp.remove();
			}
		}
	}
</script>

<style lang="scss">
	.card1 {
		height: 100%;
		text-align: left;

		.avatar {
			text-align: center;
			width: 90%;
			margin: 0 auto;

			img {
				max-width: 250px;
				width: 100%;
				border: solid 5px white;
				border-radius: 30px;
				box-shadow: white 0px 0px 10px 2px;
			}
		}

		.content {
			text-align: center;

			.copy {
				cursor: pointer;

				&:active {
					opacity: 0.6;
				}

				.copyIcon {
					font-size: 22px;
					margin-left: 10px;
				}

				&:hover .copyTip {
					display: block !important;
				}

				.copyTip {
					display: none;
					margin-left: 10px;
					margin-top: 3px;
					font-size: 14px;
					color: grey;
				}
			}

		}

		.binary {
			color: #939393;
			text-align: center;

			@media only screen and (max-width : 768px) {
				font-size: 8px;
				margin-top: 3px;
			}
		}
	}
</style>