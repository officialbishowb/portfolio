
<template>
    <!-- About -->
    <div id="about">
        <h3 class="section-header">about me</h3>
        <div class="about-content row mt-5 justify-content-center">

            <div class="col-md-6">

                <p style="text-justify: inter-word;">
                    My name is Bishow and I am <span class="age"></span> years old IT student. I spend mostly my free time
                    learning new skills (in field like cybersecurity) and programming (leetcode & co). Although I am a fullstack developer, 
                    I am more interested in backend development as I am not a big fan of frontend development. 
                    <br><br>
                    Talking about projects... I have many random projects on my <a
                        href='https://github.com/officialbishowb'>github</a>. They are mostly !useful projects
                    that can make your life !bettter. So don't forget to have a look on it.
                    <br><br>
                    Well, these are all basic infos.. about me.
                </p>
                <hr>
                <div class="social-medias">

                    <a href="https://github.com/officialbishowb"><font-awesome-icon icon="fa-brands fa-github" /></a>
                    <a href="https://twitter.com/officialbishowb"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                    <a href="https://instagram.com/officialbishowb"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                    <a href="https://t.me/officialbishowb"><font-awesome-icon icon="fa-brands fa-telegram" /></a>
                    <a href="https://www.linkedin.com/in/bishowb/"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>

                </div>

            </div>


        </div>
    </div>
</template>


<script>

export default {
    name: 'AboutView',
    mounted() {
        this.displayAge();
    },
    methods: {
        displayAge: function () {
            var today = new Date();
            var birthDate = new Date('2003-12-09');
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            document.querySelector('.age').innerHTML = age;
        },
    }


};
</script>


<style scoped>

.social-medias {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    font-size: 2em;
}
</style>