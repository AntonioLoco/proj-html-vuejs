import { createApp } from 'vue'
import App from './App.vue'

import SplitCarousel from "vue-split-carousel";


createApp(App)
    .use(SplitCarousel)
    .mount('#app')
