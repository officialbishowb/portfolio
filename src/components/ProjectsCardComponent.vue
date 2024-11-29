<template>
    <div class="projects">
            <div class="row">
                <div class="col-md-4" v-for="repo in repos" :key="repo.id">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ repo.name }}</h5>
                            <p class="card-text">{{ repo.description }}</p>
                            <a :href="repo.html_url" class="btn btn-primary">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsCard',
    data() {
        return {
            repos: [
                {
                    id: 1,
                    name: 'Shopping List',
                    description: 'A modified version of the shopping list project from the Vue.js course.',
                    html_url: 'https://github.com/officialbishowb/shopping_list'
                },
                {
                    id: 2,
                    name: 'URL Shortener',
                    description: 'A simple URL shortener built with Vue.js and Express.',
                    html_url: 'https://github.com/officialbishowb/url_shortener'
                },
                {
                    id: 3,
                    name: 'ToDoIst Telegram Bot',
                    description: ' This bot can be used to create tasks in Todoist, list them and delete them. Beside that it can also be used to enable reminders for those task that have date and time set in Todoist (as todoist offers reminder only for Premium users). ',
                    html_url: 'https://github.com/officialbishowb/todoist_bot'
                }
            ]
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
}
.col-md-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
    padding: 15px;
}
.card {
    margin: 15px 0;
    background-color: var(--bb-background-color);
    color: var(--bb-text-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card .btn-primary {
    background-color: var(--bb-second-accent-color);
    border-color: var(--bb-second-accent-color);
}

@media (max-width: 768px) {
    .col-md-4 {
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>