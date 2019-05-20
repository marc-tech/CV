<template>
	<div id="app" :class="{home: showHome}">
		<Home :show-home="showHome" @hide-home="showHome = false"/>
		<Carousel @go-home="showHome = true"/>
	</div>
</template>

<script>
  import Home from "@/components/Home"
  import Carousel from "@/components/carousel/index"

  export default {
    name: 'app',
    components: { Home, Carousel },
    data() {
      return {
        showHome: true
      }
    }
  }
</script>

<style lang="scss">
	#app {
		scroll-behavior: smooth;
		height: 100%;
		width: 100%;

		&.home {
			height: 100vh;
			overflow: hidden;
		}
	}
</style>
