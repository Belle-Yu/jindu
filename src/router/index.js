import Vue from "vue";
import Router from "vue-router";
// import Home from "../components/Home.vue";
import List from "../components/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // 进来直接是登录页面
    {
      path: "/",
      redirect: "/login", //重定向
      component: () => import("@/components/Login"), //路由懒加载，加载登录页面
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/components/Login"), //路由懒加载，加载登录页面
    },
    {
      path: "/home",
      //   component: Home
      //   component: () => import("@/components/Home"), //ES6-import，路由懒加载
      component: (resolve) => require(["@/components/Home"], resolve), //异步组件
    },
    {
      path: "/list",
      component: List,
    },
    {
      path: "*", //找不到通配符
      name: "NotFound",
      component: () => import("@/components/NotFound"),
    }
  ],
  mode: "history",
});
