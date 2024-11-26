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
    mounted() {
      const script = document.createElement('script');
      script.defer = true;
      script.setAttribute('data-website-id', '674631df00b6563628e9c86c');
      script.setAttribute('data-domain', 'officialbishowb.com');
      script.src = 'https://datafa.st/js/script.js';
      document.head.appendChild(script);
    }
  };
  </script>
  <style>




  </style>
  
