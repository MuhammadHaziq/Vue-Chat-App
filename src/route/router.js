import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/Home";
import Chat from "@/views/Chat";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login, name: "Login" },
  { path: "/home", component: Home, name: "Home" },
  {
    path: "/chat",
    component: Chat,
    name: "Chat",
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next();
      } else {
        next({ name: "Login" });
      }
    }
  }
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
});

export default router;
