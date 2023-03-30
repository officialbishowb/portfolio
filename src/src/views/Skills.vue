
<template>

    <!-- Skills -->
    <div id="skills" class="mx-2">
      <h3 class="section-header">my skills</h3>
      <div class="project-content row mt-5 justify-content-center">

            <SkillsCard/>


      </div>
  </div>

    



    
    
</template>


<script>

import SkillsCard from '../components/SkillsCard.vue';

export default {
  name: 'Skills',
  components: {
    SkillsCard
},
};
</script>