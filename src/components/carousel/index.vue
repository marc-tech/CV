<template>
	<div class="info">
		<div class="bg bg1 w-100 h-100">
			<div class="w-100 text-center">
				<button @click="$emit('go-home')" class="btn btn-primary m-3"><i class="fas fa-arrow-up"></i></button>
			</div>
			<div class="h-75 d-flex align-items-center">
				<Item1/>
			</div>
			<div class="icon w-100 text-center text-white">
				<i @click="scrollNext" class="fas fa-4x fa-arrow-circle-down"></i>
			</div>
		</div>

		<div class="bg bg2 w-100 h-100">
			<div class="icon w-100 text-center text-white">
				<i @click="scrollPrev" class="fas fa-4x fa-arrow-circle-up"></i>
			</div>
			<div>
				<Item2/>
			</div>
			<div class="icon w-100 text-center text-white">
				<i @click="scrollNext" class="fas fa-4x fa-arrow-circle-down"></i>
			</div>
		</div>

		<div class="bg bg3 w-100 h-100">
			<div class="icon w-100 text-white text-center pt-4">
				<i @click="scrollPrev" class="fas fa-4x fa-arrow-circle-up"></i>
			</div>
			<div class="h-75 d-flex align-items-center">
				<Item3/>
			</div>
		</div>
		<!--<div class="carousel slide" data-interval="false" data-ride="carousel" id="carousel">-->
		<!--<ol class="carousel-indicators">-->
		<!--<li class="active" data-slide-to="0" data-target="#carousel"></li>-->
		<!--<li data-slide-to="1" data-target="#carousel"></li>-->
		<!--<li data-slide-to="2" data-target="#carousel"></li>-->
		<!--</ol>-->
		<!--<div class="carousel-inner">-->
		<!--<div class="carousel-item active">-->
		<!--<Item1/>-->
		<!--</div>-->
		<!--<div class="carousel-item">-->
		<!--<Item2/>-->
		<!--</div>-->
		<!--<div class="carousel-item">-->
		<!--<Item3/>-->
		<!--</div>-->
		<!--</div>-->
		<!--<a class="carousel-control-prev" data-slide="prev" href="#carousel" role="button">-->
		<!--<span aria-hidden="true" class="carousel-control-prev-icon"></span>-->
		<!--<span class="sr-only">Previous</span>-->
		<!--</a>-->
		<!--<a class="carousel-control-next" data-slide="next" href="#carousel" role="button">-->
		<!--<span aria-hidden="true" class="carousel-control-next-icon"></span>-->
		<!--<span class="sr-only">Next</span>-->
		<!--</a>-->
		<!--</div>-->
	</div>
</template>

<script>
  import Item1 from "@/components/carousel/Item1"
  import Item2 from "@/components/carousel/Item2"
  import Item3 from "@/components/carousel/Item3"
  import "jquery-scrollify"

  export default {
    name: "Carousel",
    components: { Item3, Item2, Item1 },
    mounted() {
      $.scrollify({
        section: ".bg",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 0,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
      })
    },
    methods: {
      scrollNext() {
        $.scrollify.next()
      },
      scrollPrev() {
        $.scrollify.previous()
      }
    }
  }
</script>

<style lang="scss">
	.info {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 1;

		.icon {
			cursor: pointer;
		}

		@media (max-width: 500px) {
			.icon {
				font-size: 10px !important;
			}
		}

		.bg1 {
			background-image: url("/img/bg1.jpg");
			background-size: cover;
		}

		.bg2 {
			background-image: url("/img/bg2.jpg");
			background-size: cover;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
		}

		.bg3 {
			background-image: url("/img/bg3.jpg");
			background-size: cover;
		}
	}
</style>
