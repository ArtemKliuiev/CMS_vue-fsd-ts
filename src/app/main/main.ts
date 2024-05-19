import '../style/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { customTheme } from '@/app/style/theme/theme'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import { router } from '../providers'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme,
        },
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify).mount('#app')
