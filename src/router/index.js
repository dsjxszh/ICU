import Vue from "vue";
import Router from "vue-router";
import Layout from '@/layout'; // 布局页

Vue.use(Router);

// 通用页面：这里的配置时不需要权限的
export const constRoutes = [
  {
    path: "/",
    component: () => import("@/views/Login"),
    hidden: true // 导航菜单忽略该项
  },
  {
    path: "/dashboard",
    component: () => import("@/layout"),// 应用布局
  }
];

// 权限页面
export const asyncRoutes = [
    {
      path: "/about",
      component: Layout,
      redirect: "/about/index",  
    }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constRoutes
});