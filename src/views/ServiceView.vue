<template>
    <div class="service-view" id="services" v-if="services.length > 0">
        <h3 class="section-header">my services</h3>
        <div class="card-container row">
            <ServiceCard v-for="service in services" :key="service.id" :title="service.title" :description="service.description" />
        </div>
    </div>
</template>

<script>
import ServiceCard from "../components/ServiceCard.vue";

export default {
    components: {
        ServiceCard,
    },
    data() {
        return {
            services: [
                // {
                //     id: 1,
                //     title: "Custom telegram bot",
                //     description: "I specialize in creating custom Telegram bots tailored to your unique needs. These bots can seamlessly integrate with APIs and databases to automate tasks, making your Telegram experience smoother and more efficient. From simple welcome bots to intricate data scraping and storage bots, I've got you covered."     
                // },
                
            ],
        };
    },
};
</script>


<style scoped>
.card-container {
    margin: 30px 0;
}
</style>

