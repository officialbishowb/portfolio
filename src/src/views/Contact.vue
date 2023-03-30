
<template>
    <!-- Contact Form -->
    <div class="my-5" id="contact">
        <h3 class="section-header">contact me</h3>
        <div class="project-content row mt-5 justify-content-center">

            <div class="col-md-6">
                <ContactForm />
            </div>


        </div>
    </div>
</template>


<script>

import ContactForm from '../components/ContactForm.vue';

export default {
    name: 'Contact',
    components: {
        ContactForm
    },
};
</script>