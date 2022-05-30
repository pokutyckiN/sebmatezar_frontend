import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import "leaflet/dist/leaflet.css"
import router from './router'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp (App)
app.use(router)
app.component('DatePicker', Datepicker)
app.mount('#app')
// createApp(App).use(router).mount('#app')
