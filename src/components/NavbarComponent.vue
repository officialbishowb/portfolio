<template>
  <nav :class="{ 'is-scrolling': isScrolling, 'navbar': true, }">

    <div class="container">
      <a href="/#">

        <div class="logo">
          <img src="../assets/img/logo.png" alt="logo">
        </div>
      </a>


      <div class="menu">
        <ul class="nav-links">
          <li>
            <a href="/#" :class="{ active: isActive('/#') }" v-on:click="setActive('/#')">
              home
            </a>
          </li>
          <li>
            <a href="/#about" :class="{ active: isActive('/#about') }" v-on:click="setActive('/#about')">about
            </a>
          </li>
          <li>
            <a href="/#projects" :class="{ active: isActive('/#projects') }" v-on:click="setActive('/#projects')">
              projects</a>
          </li>
          <li>
            <a href="/#skills" :class="{ active: isActive('/#skills') }" v-on:click="setActive('/#skills')">skills
            </a>
          </li>
          <li>
            <a href="/#services" :class="{ active: isActive('/#services') }" v-on:click="setActive('/#services')">
              service</a>
          </li>
          <li>
            <a href="/#contact" :class="{ active: isActive('/#contact') }" v-on:click="setActive('/#contact')">
              contact</a>
          </li>
       
        </ul>


        <div class="hamburger" @click="toggleMenus()">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  </nav>
</template>
  
  
  
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  background-color: var(--bb-background-color);
}


.navbar .logo {
  width: 100px;
  z-index: -1;
}

.navbar .logo img {
  width: 100%;
}

.navbar .menu ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar .menu ul li {
  margin: 20px 23px;
}

.navbar .menu ul li a {
  text-decoration: none;
  font-size: .9em;
  color: var(--bb-text-color-light);
  font-weight: 500;
  transition: all 0.3s ease;
}

.navbar .menu ul li a:hover {
  color: var(--bb-second-accent-color);
}

.navbar .menu ul li a.active {
  border-bottom: 2px solid var(--bb-second-accent-color);
}

.navbar.is-scrolling {
  box-shadow: 0px 1px 1px 1px #222222;
}

.navbar .menu .hamburger {
  display: none;
  cursor: pointer;
}

.navbar .menu .hamburger span {
  display: block;
  height: 2px;
  width: 25px;
  margin: 5px;
  background-color: var(--bb-text-color-light);
  transition: all 0.3s ease;
  z-index: 999;
}

.navbar .menu .nav-links.open {
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  transition-delay: 0.25s;
}

@media screen and (max-width: 992px) {
  .navbar .menu .nav-links {
    display: none;
    flex-direction: column;
    background-color: var(--bb-background-color);
    align-items: center;
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 50px;
    left: 0;
    z-index: -1;
    transition: all 0.5s ease;
  }

  .navbar .menu .hamburger {
    display: block;
    cursor: pointer;

  }

  .navbar .menu .hamburger:hover {
    opacity: 0.8;
  }

  .navbar .menu .hamburger span {
    height: 3px;
    width: 34px;
  }

  .navbar .menu ul li a {
    font-size: 1.6em;
  }
}
</style>
  

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      active: '/#',
      isScrolling: false,
    };
  },
  methods: {
    isActive(path) {
      return this.active === path;
    },
    setActive(path) {
      this.active = path;
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.remove('open');
      this.changeTitle(path);
    },
    toggleMenus() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('open');
    },
    handleScroll() {
      const scroll = window.scrollY;
      if (scroll > 15) {
        this.isScrolling = true;
      } else {
        this.isScrolling = false;
      }
    },
    changeTitle(pathName) {
      const title = document.querySelector('title');
      switch (pathName) {
        case '/#':
          title.innerHTML = 'Home | Portfolio';
          break;
        case '/#about':
          title.innerHTML = 'About | Portfolio';
          break;
        case '/#projects':
          title.innerHTML = 'Projects | Portfolio';
          break;
        case '/#skills':
          title.innerHTML = 'Skills | Portfolio';
          break;
        case '/#contact':
          title.innerHTML = 'Contact | Portfolio';
          break;
        default:
          title.innerHTML = 'Bishow - Portfolio';
          break;
      }
    },



  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
