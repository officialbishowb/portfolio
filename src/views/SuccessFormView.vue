<template>
    <div class="success-container text-center">
        <div class="content">
            <p>Thank you for your submission. <br>I will be in touch shortly.</p>
        </div>

        <p id="redirection_time">You will be redirected in 3 seconds</p>
    </div>
</template>


<script>

export default {
    name: 'SuccessFormView',
    mounted() {
        setTimeout(() => {
            this.$router.push('/');
        }, 3000);
    },
};

</script>