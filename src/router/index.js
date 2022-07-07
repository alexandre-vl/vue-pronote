import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/textbook",
    name: "textbook",
    component: () => import("../views/TextbookView.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("../views/ResultsView.vue"),
  },
  {
    path: "/timetable",
    name: "timetable",
    component: () => import("../views/TimetableView.vue"),
  },
  {
    path: "/communication",
    name: "communication",
    component: () => import("../views/ComView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
