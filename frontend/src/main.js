import { createApp } from 'vue'
import '../public/style/style.css'
import { registerBaseComponents } from './helpers/Utils/registerGlobalComponents'
import './plugins/vee-validate'
import App from './App.vue'
import api from './api/index'
import './registerServiceWorker'
import './styles/index.scss'
import router from './router'
import number from './plugins/v-number'
import slice from './plugins/v-slice'

const appRoot = createApp(App)
appRoot.directive('number', number)
appRoot.directive('slice', slice)
registerBaseComponents(appRoot)

appRoot.config.globalProperties.debug = (msg) => console.log(`Debug: ${msg}`)

appRoot.use(router).use(api).mount('#app')
