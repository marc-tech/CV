<template>
    <div class="info">
        <div class="w-100 text-center">
            <button class="btn btn-primary m-3" @click="$emit('go-home')"><i class="fas fa-arrow-up"></i></button>
        </div>
        <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <Item1/>
                </div>
                <div class="carousel-item">
                    <Item2/>
                </div>
                <div class="carousel-item">
                    <Item3/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
  import Item1 from "@/components/carousel/Item1";
  import Item2 from "@/components/carousel/Item2";
  import Item3 from "@/components/carousel/Item3";

  export default {
    name: "Carousel",
    components: {Item3, Item2, Item1}
  }
</script>

<style lang="scss">
    .info {
        background: linear-gradient(320deg,
                #ff3b3b,
                #790062,
                #160170,
                #0011e5);
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: 1;
    }
</style>