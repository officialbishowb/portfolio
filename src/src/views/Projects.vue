
<template>
  <!-- My Projects -->
  <div id="projects">
      <h3 class="section-header">my projects</h3>
      <div class="project-content row mt-5 justify-content-center">

          <div class="col-md-6">


              <GithubReposCard/>
            

          </div>


      </div>
  </div>
</template>


<script lang="ts">

import GithubReposCard from '../components/GithubReposCard.vue';

export default {
  name: 'Projects',
  components: {
    GithubReposCard
  }


};
</script>


<style scoped>
.repos.card {
  background-color: var(--bb-background-color);
}
</style>