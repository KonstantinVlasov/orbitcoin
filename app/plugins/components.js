import Vue from 'vue'

import VueLazyload from 'vue-lazyload'

import appModal from '../components/appModal'

import appHeader from '../components/layout/appHeader.vue'
import appMenu from '../components/layout/appMenu.vue'
import appPage from '../components/layout/appPage.vue'
import appSidebar from '../components/layout/appSidebar.vue'

import appLogo from '../components/appLogo.vue'

Vue.use(VueLazyload)
Vue.use(appModal)

Vue.component('app-header', appHeader)
Vue.component('app-menu', appMenu)
Vue.component('app-page', appPage)
Vue.component('app-sidebar', appSidebar)

Vue.component('app-logo', appLogo)
