import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import DestacadosView from '../views/DestacadosView.vue'
import NotFoundView from '../views/NotFoundView'

Vue.use(BootstrapVue);
const routes = [
{
path: "/",
name: "HomeView",
component:HomeView
},

{
path: '/GaleriaView',
name: 'GaleriaView',
component: GaleriaView,  
},

{
path: '/DestacadosView',
name: 'DestacadosView',
component: DestacadosView, 
},

{ 
path: '/:pathMatch(.*)*',
name: 'NotFoundView',
component: NotFoundView 
}
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router
