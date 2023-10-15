<template>
    <div class="col-lg-4 col-md-12">
        <div class="card">
            <div class="card-header">
                <h3>{{ this.title }}</h3>
            </div>
            <div class="card-body">
                <p>{{ this.description}}</p>
            </div>

            <div class="card-footer">
                <button>
                    <a href="/#contact">Contact Me</a>
                </button>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },

  
}
</script>

<style scoped>
.card {
    border: 1px solid var(--bb-accent-color);
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 10px;
    background-color: var(--bb-background-color);
}

.card-header {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--bb-text-color-light);
}

.card-body {
    margin-bottom: 10px;
    color: var(--bb-text-color-light);
}

.card-footer {
    text-align: right;
}


.card-footer button a{
    text-decoration: none;
    color: var(--bb-background-color);
}

button {
    background-color: var(--bb-accent-color);
    color: var(--bb-background-color);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background-color: var(--bb-second-accent-color);
}
</style>
