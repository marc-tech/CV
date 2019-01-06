<template>
	<div class="SideNav">
		<ul class="links">
			<li v-on:click="scrollTo('#layout1')">
				<p>Profile</p>
				<i class="far fa-circle"></i>
			</li>
			<li v-on:click="scrollTo('#layout2')">
				<p>Skills</p>
				<i class="far fa-circle"></i>
			</li>
			<li v-on:click="scrollTo('#layout3')">
				<p>Experience</p>
				<i class="far fa-circle"></i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "SideNav",
		methods: {
			scrollTo(elemId) {
				var element = document.getElementById(elemId);
				element.scrollIntoView();
			}
		}
	}
</script>

<style lang="scss">
	.SideNav {
		bottom: 0;
		z-index: 99;
		position: fixed;
		right: 0;
		top: 42%;

		.links {
			margin: 0;
			list-style-type: none;
			min-width: 100px;

			li {
				cursor: pointer;
				opacity: 0.8;
				position: relative;
				padding-right: 40px;
				padding-top: 5px;
				padding-bottom: 5px;
				font-size: 18px;
				height: 33px;
				width: 164px;
				color: grey;

				i {
					padding-right: 3px;
					position: absolute;
					top: 10px;
					right: 5px;
					font-size: 12px;
				}

				&:hover {
					padding-top: 0px;
					padding-bottom: 0px;
					opacity: 1;

					p {
						font-size: 22px;
					}

					i {
						font-size: 16px;
					}
				}
			}
		}

		@media (max-width: 900px) {
			width: 100%;
			left: 0;
			top: auto;

			.links {
				background: white;
				padding: 0;
				display: flex;
				justify-content: center;

				li {
					color: grey;
					padding-right: 5px !important;

					i {
						display: none;
					}

					&:hover {
						padding-top: 5px;
						padding-bottom: 0px;
						opacity: 1;
						color: black;

						p {
							font-size: 17px !important;
						}
					}
				}
			}
		}
	}
</style>