import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import Routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes : Routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})

Vue.config.productionTip = false

new Vue({
	router : router,
  	render: h => h(App)
}).$mount('#app')
