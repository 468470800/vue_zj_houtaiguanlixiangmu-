import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/index"//默认导入目录下的index.vue等价
import Layout from "../components/Layout";
import Supplier from "../views/Supplier"
import Staff from "../views/Staff"
import Member from "../views/member"
import Home from "../views/Home"
import Goods from "../views/goods"
Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/Layout",
        name: "Layout",
        component: Layout,
        children:[
          {
            path:"/supplier",
            name:"supplier",
            component:Supplier,
            meta:{
              title:"供应商"
            }
          },
          {
            path:"/Home",
            name:'Home',
            component:Home,
            meta:{
              title:"首页"
            }
          },
          {
            path:"/member",
            name:'member',
            component:Member,
            meta:{
              title:"会员管理"
            }
          },
          {
            path:"/goods",
            name:'goods',
            component:Goods,
            meta:{
              title:"商品管理"
            }
          },
          {
            path:"/staff",
            name:'staff',
            component:Staff,
            meta:{
              title:"员工管理"
            }
          }
        ]
    },

]


const router = new VueRouter({
    routes
});

export default router;
