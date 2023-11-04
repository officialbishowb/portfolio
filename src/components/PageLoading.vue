<template>
    <div class="loading-page" v-if="isLoading">
        <div class="loading-spinner"></div>
    </div>
</template>

<style>
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* make sure the loading page is on top of everything */
}

.loading-spinner {
    border: 16px solid  var(--bb-background-color);
    border-top: 16px solid var(--bb-accent-color);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>

<script>
export default {
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}
</script>
