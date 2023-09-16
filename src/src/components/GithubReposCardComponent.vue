<template>
    <div class="github-repos">
      <div class="repos">
        <carousel :items-to-show="1.5">
          <slide v-for="repo in repos" :key="repo.id"> <!-- Use repo.id as the key -->
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ repo.name }}</h5>
                <p class="card-text">{{ repo.description }}</p>
                <a :href="repo.html_url" class="btn btn-primary">View on GitHub</a>
              </div>
            </div>
          </slide>
  
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </template>
  
  
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    name : 'GithubReposCard',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            repos: []
        }
    },
    created() {
        fetch('https://api.github.com/users/officialbishowb/repos')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching GitHub repos');
                }
            })
            .then(data => {
                // Exclude repos that are forks, archived, or private
                this.repos = data.filter(repo => !repo.fork && !repo.archived && !repo.private);
                localStorage.setItem('githubRepos', JSON.stringify(this.repos));
            })
            .catch(error => {
                console.error(error);
                // If there is an error fetching from the API, get the repos from local storage
                let cachedRepos = localStorage.getItem('githubRepos');
                if (cachedRepos) {
                    this.repos = JSON.parse(cachedRepos);
                }
            });
    }

} 
</script>
<style scoped>
div.card {
    background-color: var(--bb-background-color) !important;
    color: var(--bb-text-color);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 10px;
}

h5.card-title {
    color: var(--bb-accent-color);
}

div.card:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

a.btn {
    background-color: var(--bb-accent-color);
    border: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

a.btn:hover {
    background-color: var(--bb-second-accent-color);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>