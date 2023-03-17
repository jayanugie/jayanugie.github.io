<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-[80vh]">
      <!-- TITLE -->
      <div class="text-text-primary space-y-6">
        <p class="text-4xl font-semibold">Projects</p>
        <p class="font-medium">
          Partnered with inspiring collaborators, innovators and brands.
        </p>
      </div>

      <!-- PROJECTS -->
      <div class="mt-12 space-y-4">
        <!-- Content -->
        <router-link
          v-for="project in projects"
          :key="project.id"
          :to="'/projects/' + project.title"
          class="flex md:p-3 p-2 rounded-lg hover:bg-hover-navbar transition-all"
        >
          <img
            :src="project.image"
            alt="phone"
            class="md:w-56 w-32 rounded-lg object-cover"
          />
          <div class="text-sm ml-4 space-y-2">
            <p class="text-text-primary font-medium">{{ project.title }}</p>
            <p class="text-text-secondary">{{ project.description }}.</p>
          </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    axios
      .get("../../db/db.json")
      .then((res) => {
        this.projects = res.data.projects;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
