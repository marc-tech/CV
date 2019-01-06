<template>
	<div class="card3">
		<h1 class="mt-2">Experience</h1>
		<div class="row justify-content-center date-list">
			<div class="col-md-4 col-sm-12 date">
				<strong>Since August 2018</strong>
			</div>
			<div class="col-md-8 col-sm-12 description">
				<p>
					I work as a freelance fullstack developer.
				</p>
			</div>
			<div class="col-md-4 col-sm-12 date">
				<strong>03/03/2018 - 03/07/2018</strong>
			</div>
			<div class="col-md-8 col-sm-12 description">
				<p>
					Internship in a startup studio "Unitee" as a front end web developer.<br>
					I joined a team of 3 people on a ReactJS project.
				</p>
			</div>
			<div class="col-md-4 col-sm-12 date">
				<strong>01/06/2017 - now</strong>
			</div>
			<div class="col-md-8 col-sm-12 description">
				<p>
					development of a platform for connecting potential clients with music professionals.<br>
					<a href="http://fastdj.fr/" target="_blank">FastDJ</a>
				</p>
			</div>

			<div class="col-12">
				<a class="mr-3" href="https://github.com/marc-tech" target="_blank">
					<i class="fab fa-github-square fa-4x"></i>
				</a>
				<a href="https://www.linkedin.com/in/marc-nalpas-b87512118/" target="_blank">
					<i class="fab fa-linkedin fa-4x"></i>
				</a>
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
		padding: 25px;

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

		@media (max-width: 360px) {
			padding: 15px;
			.date-list {
				margin-top: 15px;
			}

			strong {
				font-size: 12px;
			}

			p {
				margin: 0;
				font-size: 11px;
			}
		}
	}
</style>