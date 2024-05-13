<template>
    <div class="container">
      <HomeView />
      <AboutView />
      <ProjectsView />
      <ServiceView />
      <ContactView />
      <FooterView />
    </div>
  </template>
  
  <script>


  import HomeView from './views/HomeView.vue';
  import AboutView from './views/AboutView.vue';
  import ProjectsView from './views/ProjectsView.vue';
  import ContactView from './views/ContactView.vue';
  import FooterView from './views/FooterView.vue';
  import ServiceView from './views/ServiceView.vue';


  
  export default {
    components: {
      HomeView,
      AboutView,
      ProjectsView,
      ContactView,
      FooterView,
      ServiceView,
    },

    
  };
  </script>
  
  <style>




  </style>
  
