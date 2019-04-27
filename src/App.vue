<template>
    <div id="app">
        <Home :show-home="showHome" @hide-home="showHome = false"/>
        <div class="info">
            <button class="btn btn-primary m-3" @click="showHome = true"><i class="fas fa-arrow-up"></i></button>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card">
                            <h2 style="text-decoration: underline"><strong>Statut</strong></h2>
                            <h3>Full stack lead developer</h3>
                            <h4>Auto entrepreneur</h4>
                            <h5>SIRET : 841 546 856 00011</h5>
                            <h2 class="mt-4" style="text-decoration: underline"><strong>Contact</strong></h2>
                            <div class="d-flex justify-content-center">
                                <h5><a href="mailto:marc.nalpas@epitech.eu" id="email">marc.nalpas@epitech.eu</a></h5>
                                <!--<div class="d-flex copy" v-on:click="copyText">-->
                                <!--<i class="far fa-copy copyIcon"></i>-->
                                <!--<span class="copyTip">Copy to clipboard</span>-->
                                <!--</div>-->
                            </div>
                            <div>
                                <a href="#">
                                    <i class="fab fa-3x fa-linkedin m-2" style="color: #007bb6"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-3x fa-github-square m-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            2
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            3
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        <!--<layout-1/>-->
        <!--<layout-2/>-->
        <!--<layout-3/>-->
        <!--<SideNav/>-->
    </div>
</template>

<script>
  import Home from "@/components/Home";
  import SideNav from "@/components/SideNav";
  import Layout1 from "@/components/layout/Layout-1";
  import Layout2 from "@/components/layout/Layout-2";
  import Layout3 from "@/components/layout/Layout-3";
  import Particles from "@/components/Particles";

  export default {
    name: 'app',
    components: {
      Home,
      Particles,
      Layout1,
      Layout2,
      Layout3,
      SideNav
    },
    mounted() {
      this.calcCardMarginTop();
      window.addEventListener('scroll', () => {
        this.calcCardMarginTop()
      }, {
        capture: true,
        passive: true
      });

    },
    methods: {
      calcCardMarginTop() {
        $('.card1').css({'margin-top': window.scrollY});
        $('.card2').css({'margin-top': window.scrollY - window.innerHeight});
        $('.card3').css({'margin-top': window.scrollY - (window.innerHeight * 2)});
      }
    },
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
        text-align: center;
        height: 100%;
        width: 100%;
    }

    .info {
        background: #004d9d;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .card {
        padding: 50px;
        border-radius: 30px !important;
        background: #e6e6e6 !important;
        margin: 0 auto;
        height: 80vh;
        width: 75vw;
    }

    .card1 {
        background: $cardFirstColor;
        border-radius: $cardBorderRadius;
        position: absolute;
        border: 2px solid white;
        box-shadow: 10px 10px 20px 1px #1b1b1b;
        height: $cardHeight;
        width: $cardWidth;
        top: $cardTop;
        left: $cardLeft;
        @media only screen and (max-width: 900px) {
            height: $cardHeightMobile !important;
            width: $cardWidthMobile !important;
            top: $cardTopMobile !important;
            left: $cardLeftMobile !important;
        }
        color: white;
    }

    .card2 {
        background: $cardSecondColor;
        border-radius: $cardBorderRadius;
        position: absolute;
        border: 2px solid black;
        box-shadow: 10px 10px 20px 1px #292929;
        height: $cardHeight;
        width: $cardWidth;
        top: $cardTop;
        left: $cardLeft;
        @media only screen and (max-width: 900px) {
            height: $cardHeightMobile !important;
            width: $cardWidthMobile !important;
            top: $cardTopMobile !important;
            left: $cardLeftMobile !important;
        }
        color: black;
    }

    .card3 {
        background: $cardFirstColor;
        border-radius: $cardBorderRadius;
        position: absolute;
        border: 2px solid white;
        box-shadow: 10px 10px 20px 1px #1b1b1b;
        height: $cardHeight;
        width: $cardWidth;
        top: $cardTop;
        left: $cardLeft;
        @media only screen and (max-width: 900px) {
            height: $cardHeightMobile !important;
            width: $cardWidthMobile !important;
            top: $cardTopMobile !important;
            left: $cardLeftMobile !important;
        }
        color: white;
    }
</style>
