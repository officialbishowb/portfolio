<template>
  <!-- Header -->
  <NavbarComponents />


  <!-- Home -->
    <div class="home-content"  id="home">
      <h1><span class="greeting">hey!</span> it's me</h1>
      <h2 class="name">bishow</h2>

      <div class="more">
        <a href="#about" v-on:click="setActive('/#about')" class="btn btn-primary">more about me</a>
    </div>
    </div>

    
</template>


<script>

import NavbarComponents from '../components/NavbarComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponents
  },
};




</script>


<style scoped>
.home-content {
  margin-top: 180px;
  text-align: center;
  justify-content: center;
  margin-bottom: 180px 10px 0 10px;
}

.greeting {
  font-size: 2em;
}

.name {
  margin-top: -15px;
  font-size: 4.5em;
  animation: color_change 10s infinite;
}

@keyframes color_change {
  0% {
    color: var(--bb-accent-color)
  }

  50% {
    color: var(--bb-second-accent-color)
  }

  100% {
    color: var(--bb-accent-color)
  }
}

.more{
  margin: 180px 0;
}
.more a.btn{
  background-color: var(--bb-accent-color);
  border-radius: 0 0 10px 10px;
  color: var(--bb-background-color);
  font-size: 1.1em;
  padding: 10px 20px;
  transition: all 0.3s ease;
  border: none;
}
.more a.btn:hover{
  background-color: var(--bb-second-accent-color);
}
</style>