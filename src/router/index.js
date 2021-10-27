import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Coin from "../views/Coin.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/Register.vue";
import firebase from "../utils/firebase";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/coin",
    name: "coin",
    component: Coin,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: SignUp,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log(isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
