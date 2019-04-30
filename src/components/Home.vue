<template>
    <div class="home h-100" :class="{hide: !show}">
        <div class="home-content">
            <img src="/img/avatar1.jpg" alt="profile image" class="home-content--avatar shadow-lg">
            <h1>Marc NALPAS</h1>
            <h3>Full Stack Lead Developer</h3>
            <button class="btn btn-primary mt-4" @click="hideHome">Get started</button>
        </div>

        <Particles :pause="!show" name="home-particles" class="home-particles"/>
    </div>
</template>

<script>
  import Particles from "@/components/Particles";

  export default {
    name: "home",
    components: {Particles},
    methods: {
      hideHome() {
        this.show = false
        this.$emit("hide-home")
      }
    },
    watch: {
      showHome() {
        this.show = this.showHome
      }
    },
    props: {
      showHome: {
        default: true
      }
    },
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style lang="scss">
    .home {
        background: white;
        z-index: 5;
        overflow: hidden;
        text-align: center;
        position: relative;
        top: 0;

        transition: all .5s ease-out;

        &.hide {
            top: -100vh;
        }

        &-content {
            width: 280px;
            margin-top: calc(50vh - 200px);
            margin-left: calc(50vw - 140px);
            position: absolute;
            z-index: 1;

            &--avatar {
                object-fit: cover;
                object-position: top;
                border-radius: 50%;
                width: 200px;
                height: 200px;
            }

            h1 {
                margin-top: 20px;
                font-weight: 900;
            }
        }

        &-particles {
            top: 0;
            left: 0;
            position: absolute;
            z-index: 0;
        }
    }
</style>