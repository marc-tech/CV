<template>
	<div class="card3">
		<h1 class="mt-2">Experience</h1>
		<div class="row justify-content-center date-list">
			<div class="col-md-4 col-sm-12 date">
				<strong>03/03/2018 - 03/07/2018</strong>
			</div>
			<div class="col-md-8 col-sm-12 description">
				<p>
					Internship in a startup studio "Unitee" as a front end web developer.<br>
					I joined a team of 3 people on a ReactJS project.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card-3"
	}
</script>

<style lang="scss">
	.card3 {
		padding: 15px;

		.date-list {
			margin-top: 25px;

			.date {
				text-align: center;
				margin-bottom: 10px;
			}

			.description {
				text-align: left;
			}
		}
	}
</style>