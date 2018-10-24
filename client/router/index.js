import Vue from 'vue'
import Router from 'vue-router'
import PostComponent from '@/components/PostComponent'

Vue.user(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'PostComponent',
            component: PostComponent
        }
    ]
})
