
<template>
    <!-- Contact Form -->
    <div class="my-5" id="contact">
        <h3 class="section-header">contact me</h3>
        <div class="project-content row mt-5 justify-content-center">

            <div class="col-md-6">
                <ContactFormComponent />
            </div>


        </div>
    </div>
</template>


<script>

import ContactFormComponent from '../components/ContactFormComponent.vue';

export default {
    name: 'ContactView',
    components: {
        ContactFormComponent
    },
};
</script>