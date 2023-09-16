
<template>

    <!-- Skills -->
    <div id="skills" class="mx-2">
      <h3 class="section-header">my skills</h3>
      <div class="project-content row mt-5 justify-content-center">

            <SkillsCardComponent/>


      </div>
  </div>

    



    
    
</template>


<script>

import SkillsCardComponent from '../components/SkillsCardComponent.vue';

export default {
  name: 'SkillsView',
  components: {
    SkillsCardComponent
},
};
</script>