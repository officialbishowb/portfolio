<template>
    <div class="container">
      <div class="cursor" id="cursor"></div>
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
      const cursor = document.getElementById("cursor");
  
      document.body.addEventListener("mousemove", (e) => {
        // Update the cursor's position based on the mouse coordinates
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
    },
  };
  </script>
  
  <style>
 .cursor {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
  background-color: transparent;
  z-index: 10000;
  border: 2px solid var(--bb-second-accent-color);
  height: 30px;
  width: 30px;
  z-index: 9999;
}

.cursor::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: var(--bb-accent-color);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  </style>
  