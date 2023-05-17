<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-screen">
      <!-- TITLE -->
      <div class="text-text-primary space-y-6">
        <p class="text-4xl font-semibold">Projects</p>
        <p class="font-medium">Here are some views of my coding.</p>
      </div>

      <!-- PROJECTS -->
      <Transition name="fade">
        <div class="mt-12 space-y-4" v-show="contentLoaded">
          <!-- Content -->
          <router-link
            v-for="project in projects"
            :key="project.id"
            :to="'/projects/' + project.title"
            class="flex md:p-3 p-2 rounded-lg hover:bg-hover-navbar transition-all"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="md:w-56 w-32 rounded-lg object-cover"
            />
            <div class="text-sm ml-4 space-y-2">
              <p class="text-text-primary font-medium">{{ project.title }}</p>
              <p class="text-text-secondary">{{ project.description }}</p>
            </div>
          </router-link>
        </div>
      </Transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import { projects } from "../../db/db.json";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      projects: [],
      contentLoaded: false,
    };
  },
  mounted() {
    this.projects = projects;
    setTimeout(() => {
      this.contentLoaded = true;
    }, 200);
  },
};
</script>
