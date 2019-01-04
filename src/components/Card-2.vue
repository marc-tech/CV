<template>
	<div class="card2">
		<h1>Skills</h1>
		<div class="row">

			<div class="col-6">
				<h2>HTML, CSS</h2>
			</div>
			<div class="col-6">
				<VueStarRating read-only="readOnly" :show-rating="showRating" :star-size="starSize" :increment="increment" rating="4.5"/>
			</div>

			<div class="col-6">
				<h2>JS, NodeJS</h2>
			</div>
			<div class="col-6">
				<VueStarRating read-only="readOnly" :show-rating="showRating" :star-size="starSize" :increment="increment" rating="4"/>
			</div>

			<div class="col-6">
				<h2>SQL, NOSQL</h2>
			</div>
			<div class="col-6">
				<VueStarRating read-only="readOnly" :show-rating="showRating" :star-size="starSize" :increment="increment" rating="3.5"/>
			</div>

			<div class="col-6">
				<h2>C, C++, C#</h2>
			</div>
			<div class="col-6">
				<VueStarRating read-only="readOnly" :show-rating="showRating" :star-size="starSize" :increment="increment" rating="3"/>
			</div>

			<div class="col-6">
				<h2>Java</h2>
			</div>
			<div class="col-6">
				<VueStarRating read-only="readOnly" :show-rating="showRating" :star-size="starSize" :increment="increment" rating="3"/>
			</div>

		</div>

		<h1>Tools & Framework</h1>
		<h2>NPM, Yarn, Docker, Babel, ESLint, Jest, Mocha</h2>
		<h2>ReactJS, VueJS, ExpressJS (NodeJS)</h2>
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
	}
</style>