import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import StackView from "../views/StackView.vue";
import ProjectView from "../views/ProjectView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/projects/:title",
      name: "project",
      component: ProjectView,
    },
    {
      path: "/stack",
      name: "stack",
      component: StackView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundView,
    },
  ],
});

export default router;
