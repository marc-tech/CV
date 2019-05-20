<template>
	<div class="contact-card">
		<div class="text-center m-auto">

			<h1 class="title">Are you looking for a freelance experiment in designing and developing web applications?</h1>

			<div class="contact-block">
				<h2 class="mt-4"><strong>Contact</strong></h2>
				<div class="d-flex justify-content-center">
					<h5><a href="mailto:marc.nalpas@epitech.eu" id="email">marc.nalpas@epitech.eu</a></h5>
				</div>
				<div>
					<a href="https://www.linkedin.com/in/marc-nalpas-b87512118/" target="_blank">
						<i class="fab fa-3x fa-linkedin m-2" style="color: #007bb6"></i>
					</a>
					<a href="https://github.com/marc-tech" target="_blank">
						<i class="fab fa-3x fa-github-square m-2" style="color: black"></i>
					</a>
				</div>
			</div>

			<div class="status-block mt-4">
				<h2><strong>Status</strong></h2>
				<h4>Freelancer</h4>
				<h4>Full stack developer</h4>
				<h5>SIRET : 841 546 856 00011</h5>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Item1"
  }
</script>

<style lang="scss">
	.contact-card {
		padding: 30px;
		background: rgba(255, 255, 255, 0.6);
		width: 100%;

		.title {
			max-width: 1000px;
			margin: 0 auto;
		}
	}
</style>
