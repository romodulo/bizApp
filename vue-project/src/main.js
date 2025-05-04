// import './assets/main.css'

import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import VBtn from 'vuetify/components/VBtn'
// import VCard from 'vuetify/components/VCard'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
    // VBtn,
    // VCard,
    components,
    directives,
})

app.use(vuetify)
app.mount('#app')
