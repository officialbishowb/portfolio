
<template>
  <!-- My Projects -->
  <div id="projects">
      <h3 class="section-header">my projects</h3>
      <div class="project-content row mt-5 justify-content-center">

          <div class="col-md-6">


              <GithubReposCardComponent/>
            

          </div>


      </div>
  </div>
</template>


<script lang="ts">

import GithubReposCardComponent from '../components/GithubReposCardComponent.vue';

export default {
  name: 'ProjectsView',
  components: {
    GithubReposCardComponent
  }


};
</script>


<style scoped>
.repos.card {
  background-color: var(--bb-background-color);
}
</style>