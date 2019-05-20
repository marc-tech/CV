<template>
	<div class="skills-card">
		<div class="text-center m-auto">
			<h2 class="mb-4"><strong>Skills</strong></h2>
			<div class="row">
				<div class="col-md-12 col-lg-6">
					<div class="row">
						<div class="col-6">
							<h4>HTML, CSS</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="4.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>JS</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="4.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>VueJs</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="4.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>NodeJs</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="4.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>ReactJs</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="4" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>PHP</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="4" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
					</div>
				</div>

				<div class="col-md-12 col-lg-6">
					<div class="row">
						<div class="col-6">
							<h4>SQL, NOSQL</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="3.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>C, C++, C#</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="3.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>Docker</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="3" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>Python</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="3" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>Java</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="3" :read-only="readOnly" :show-rating="showRating" :star-size="starSize":border-color="borderColor"/>
						</div>
						<div class="col-6">
							<h4>Ruby</h4>
						</div>
						<div class="col-6">
							<VueStarRating :increment="increment" :rating="1.5" :read-only="readOnly" :show-rating="showRating" :star-size="starSize" :border-color="borderColor"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import VueStarRating from "vue-star-rating"

  export default {
    name: "Item2",
    components: { VueStarRating },
    data() {
      return {
        showRating: false,
        readOnly: true,
        starSize: 25,
        increment: 0.5,
        borderColor: "#000"
      }
    }
  }
</script>

<style lang="scss">
	.skills-card {
		padding: 40px;
		background: rgba(255, 255, 255, 0.9);
		width: 100%;

		@media (max-width: 800px) {
			padding: 15px 7px;
		}

		h4 {
			font-weight: 700;
		}

		.vue-star-rating {
			justify-content: center;
		}
	}
</style>
