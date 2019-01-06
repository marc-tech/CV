<template>
	<div class="card2">
		<div class="h-100 row align-items-center">

			<div class="col-12">
				<h1>Skills</h1>
				<div class="row">
					<div class="col-6">
						<h3>HTML, CSS</h3>
					</div>
					<div class="col-6">
						<VueStarRating :increment="increment" :rating="4.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize"/>
					</div>
					<div class="col-6">
						<h3>JS, NodeJS</h3>
					</div>
					<div class="col-6">
						<VueStarRating :increment="increment" :rating="4" :read-only="readOnly" :show-rating="showRating" :star-size="starSize"/>
					</div>
					<div class="col-6">
						<h3>PHP</h3>
					</div>
					<div class="col-6">
						<VueStarRating :increment="increment" :rating="3.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize"/>
					</div>
					<div class="col-6">
						<h3>SQL, NOSQL</h3>
					</div>
					<div class="col-6">
						<VueStarRating :increment="increment" :rating="3.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize"/>
					</div>
					<div class="col-6">
						<h3>C, C++, C#</h3>
					</div>
					<div class="col-6">
						<VueStarRating :increment="increment" :rating="3" :read-only="readOnly" :show-rating="showRating" :star-size="starSize"/>
					</div>
					<div class="col-6">
						<h3>Java</h3>
					</div>
					<div class="col-6">
						<VueStarRating :increment="increment" :rating="3" :read-only="readOnly" :show-rating="showRating" :star-size="starSize"/>
					</div>
				</div>
			</div>

			<div class="col-12">
				<h1>Tools & Framework</h1>
				<h3>NPM, Yarn, Docker, Babel, ESLint, Jest, Mocha</h3>
				<h3>ReactJS, VueJS, ExpressJS (NodeJS)</h3>
			</div>

		</div>
	</div>
</template>

<script>
	import VueStarRating from "vue-star-rating";

	export default {
		name: "Card-2",
		components: {VueStarRating},
		data() {
			return {
				showRating: false,
				readOnly: true,
				starSize: 40,
				increment: 0.5
			}
		}
	}
</script>

<style lang="scss">
	.card2 {
		height: 100%;
		width: 100%;

		@media (max-width: 340px) {
			h3 {
				font-size: 14px !important;
			}
		}
	}

	@media (max-width: 900px) {
		.vue-star-rating-star {
			width: 20px !important;
			height: 20px !important;
		}

		.vue-star-rating {
			margin-left: 5px;
		}
	}
</style>