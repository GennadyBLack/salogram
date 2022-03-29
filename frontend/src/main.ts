import { createApp } from 'vue'
import '../public/style/style.scss'
// @ts-ignore
import { registerBaseComponents } from './helpers/Utils/registerGlobalComponents'
import './plugins/vee-validate'
import App from './App.vue'
import api from '@/api/index'
import './registerServiceWorker'
import router from './router/index'
// @ts-ignore
import number from './plugins/v-number'
// @ts-ignore
import slice from './plugins/v-slice'

//create app instance
const appRoot = createApp(App)
//DIRECTIVES
appRoot.directive('number', number)
appRoot.directive('slice', slice)
registerBaseComponents(appRoot)

// appRoot.config.globalProperties.debug = (msg) => console.log(`Debug: ${msg}`)
// @ts-ignore
appRoot.use(router).use(api).mount('#app')
