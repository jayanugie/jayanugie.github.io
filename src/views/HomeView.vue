<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-[80vh]">
      <!-- INTRODUCTION -->
      <div class="text-text-primary space-y-6">
        <p class="text-4xl font-semibold">
          Hey, I'm Nugie <br />
          I'm <span class="text-text-secondary">Web Developer</span>
        </p>
        <p class="font-medium">
          I am an experienced web developer based in Jakarta, Indonesia. Ready
          to help find a solution for you.
        </p>
        <div class="space-x-4 flex font-medium">
          <button
            class="pt-1 pb-2 px-3 border border-border-color bg-bg-navbar rounded-lg"
          >
            <router-link to="/contact"> Contact </router-link>
          </button>
          <button
            class="pt-1 pb-2 px-3 border border-border-color bg-transparent rounded-lg"
          >
            <a
              href="mailto:jayanugie14@gmail.com"
              target="_blank"
              class="flex items-center space-x-1"
            >
              <img src="/img/icon/mail.png" alt="email" class="w-5 h-5" />
              <span>Email</span>
            </a>
          </button>
        </div>
      </div>

      <!-- PROJECTS -->
      <div class="mt-12 space-y-4">
        <p class="text-text-primary font-medium p-1">Projects</p>

        <!-- loop what's new -->
        <router-link
          v-for="item in filteredProjects"
          :key="item.title"
          class="flex md:p-3 p-2 rounded-lg hover:bg-hover-navbar transition-all"
          :to="'/projects/' + item.title"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="md:w-56 w-32 rounded-lg object-cover"
          />
          <div class="text-sm ml-4 space-y-2">
            <p class="text-text-primary font-medium">{{ item.title }}</p>
            <p class="text-text-secondary">{{ item.description }}</p>
          </div>
        </router-link>
      </div>

      <!-- STACK -->
      <div class="mt-12 border border-border-color rounded-lg">
        <div class="p-6 space-y-6">
          <div>
            <p class="font-medium text-text-primary">Tech Stacks</p>
            <p class="text-text-secondary text-sm">
              Language, technology, and tools I use regularly.
            </p>
          </div>

          <!-- loop stacks -->
          <div
            class="flex space-x-3"
            v-for="item in filteredStacks"
            :key="item.title"
          >
            <img :src="item.image" :alt="item.title" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">{{ item.title }}</p>
              <p class="text-text-secondary">{{ item.description }}</p>
            </div>
          </div>

          <!-- All Stack -->
          <router-link
            to="/stack"
            class="border border-border-color rounded-lg bg-bg-navbar p-2 justify-center flex text-text-primary font-medium"
          >
            All Stacks
          </router-link>
        </div>
      </div>

      <!-- STAY UP TO DATE -->
      <!-- <div class="mt-12 border border-border-color rounded-lg">
        <div class="p-6 space-y-6">
          Title
          <div>
            <p class="font-medium text-text-primary">Stay up to date</p>
            <p class="text-text-secondary text-sm">
              Get notified when new products and articles are published.
            </p>
          </div>

          Form Email
          <div
            class="text-sm flex max-sm:flex-col max-sm:space-y-3 sm:space-x-3"
          >
            <input
              type="text"
              placeholder="Your email"
              class="basis-3/4 rounded-lg bg-bg-navbar placeholder:text-text-secondary text-text-primary border-none focus:ring-0"
            />
            <button
              class="basis-1/4 bg-bg-navbar p-2 text-text-primary font-medium rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import { projects, stacks } from "../../db/db.json";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      projects: [],
      stacks: [],
    };
  },
  mounted() {
    this.projects = projects;
    this.stacks = stacks;
  },
  computed: {
    filteredStacks() {
      return this.stacks.slice(0, 3);
    },
    filteredProjects() {
      return this.projects.slice(0, 3);
    },
  },
};
</script>
