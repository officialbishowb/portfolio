<template>

<footer>

    <p class="text-center">

        Copyright&copy; 2022-<span id="current_year"></span> - All Rights Reserved
    </p>
</footer>


</template>


<script>

export default {
    name: 'Footer',
    mounted() {
        const currentYear = new Date().getFullYear();
        document.getElementById('current_year').innerHTML = currentYear;
    },
};

</script>

<style scoped>
footer{
    margin-top: 15%;
}
</style>