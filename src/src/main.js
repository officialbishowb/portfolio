import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all the icons you want to use */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faTelegram, faInstagram} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faGithub, faTelegram, faInstagram)




createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')