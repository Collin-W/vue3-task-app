import { createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

// each route is an obj with a path
const routes = [
    {
       path: '/about',
       name: 'About' ,
       component: About

    },
    {
       path: '/',
       name: 'Home' ,
       component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router