<template>
  <!-- My Projects -->
  <div id="projects">
      <h3 class="section-header">my projects</h3>
      <div class="project-content row mt-5 justify-content-center">
          <div class="col-md-10">
              <ProjectsCardComponent/>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import ProjectsCardComponent from '../components/ProjectsCardComponent.vue';

export default {
  name: 'ProjectsView',
  components: {
    ProjectsCardComponent
  }
};
</script>

<style scoped>

</style>
