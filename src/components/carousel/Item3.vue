<template>
    <div class="experience-card">
        <div class="m-auto">
            <h2 style="text-decoration: underline" class="mb-4 text-center"><strong>Experience</strong></h2>
            <div class="row justify-content-center date-list">
                <div class="col-md-4 col-sm-12 date text-center">
                    <h5><strong>Since August 2018</strong></h5>
                </div>
                <div class="col-md-8 col-sm-12 description">
                    <p>
                        I worked on different web project and application as a freelancer, I am extremely versatile and adapts quickly to the requests of my customers to provide a tailor-made solution that meets 100% of their needs
                    </p>
                </div>
                <div class="col-md-4 col-sm-12 date text-center">
                    <h5><strong>03/03/2018 - 03/07/2018</strong></h5>
                </div>
                <div class="col-md-8 col-sm-12 description">
                    <p>
                        Internship in a startup studio <a href="https://www.unitee.io" target="_blank">Unitee</a> as a front end web developer.<br>
                        I joined a team of 3 people on a ReactJS project.
                    </p>
                </div>
                <div class="col-md-4 col-sm-12 date text-center">
                    <h5><strong>01/06/2017 - now</strong></h5>
                </div>
                <div class="col-md-8 col-sm-12 description">
                    <p>
                        <strong>Epitech - project (VueJs, NodeJs)</strong><br>
                        development of a platform for connecting potential clients with music professionals.<br>
                        <a href="http://fastdj.fr/" target="_blank">FastDJ</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Item3"
  }
</script>

<style lang="scss">
    .experience-card {
        padding: 50px;
        background: rgba(255, 255, 255, 0.9);
        width: 100%;

        @media (max-width: 800px) {
            padding: 15px 7px;
        }
    }
</style>
