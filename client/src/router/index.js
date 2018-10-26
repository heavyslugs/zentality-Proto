//Added this entire file!
import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Home from '@/components/Home.vue'
import Analytics from '@/components/Analytics.vue'
import Resources from '@/components/Resources.vue'
import AboutUs from '@/components/AboutUs.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/analytics',
            name: 'Analytics',
            component: Analytics
        },
        {
            path: '/resources',
            name: 'Resources',
            component: Resources
        },        
        {
            path: '/aboutus',
            name: 'About Us',
            component: AboutUs
        }
    ]
})
