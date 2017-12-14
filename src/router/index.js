import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home.vue"
import productClass from "../components/productClass.vue"
import cart from "../components/cart.vue"
import center from "../components/center.vue"
import productDetail from "../components/productDeatail.vue"

Vue.use(Router)

export default new Router({
    routes:[
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/productClass',
        component:productClass,
    },
    {
        path:'/cart',
        component:cart,
    },
    {
        path:'/center',
        component:center
    },
    {
        path:"/productDetail/:id",
        component:productDetail
    },
    {
        path: '',
        redirect: '/home'
    }

]
})