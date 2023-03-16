<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10">
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
            Contact
          </button>
          <button
            class="pt-1 pb-2 px-3 border border-border-color bg-transparent rounded-lg"
          >
            <div class="flex items-center space-x-1">
              <img src="/img/copy.png" alt="copy" class="w-5 h-5" />
              <span>Email</span>
            </div>
          </button>
        </div>
      </div>

      <!-- WHAT'S NEW -->
      <div class="mt-12 space-y-4">
        <p class="text-text-primary font-medium p-1">What's new</p>

        <!-- Content 1 -->
        <div
          class="flex md:p-3 p-2 rounded-lg hover:bg-hover-navbar transition-all"
        >
          <img
            src="/img/phone.jpg"
            alt="phone"
            class="md:w-56 w-32 rounded-lg object-cover"
          />
          <div class="text-sm ml-4 space-y-2">
            <p class="text-text-primary font-medium">CyberFolio</p>
            <p class="text-text-secondary">
              A beautiful dark-themed personal website template.
            </p>
          </div>
        </div>
        <!-- Content 2 -->
        <div
          class="flex md:p-3 p-2 rounded-lg hover:bg-hover-navbar transition-all"
        >
          <img
            src="/img/phone.jpg"
            alt="phone"
            class="md:w-56 w-32 rounded-lg object-cover"
          />
          <div class="text-sm ml-4 space-y-2">
            <p class="text-text-primary font-medium">CyberFolio</p>
            <p class="text-text-secondary">
              A beautiful dark-themed personal website template.
            </p>
          </div>
        </div>
        <!-- Content 3 -->
        <div
          class="flex md:p-3 p-2 rounded-lg hover:bg-hover-navbar transition-all"
        >
          <img
            src="/img/phone.jpg"
            alt="phone"
            class="md:w-56 w-32 rounded-lg object-cover"
          />
          <div class="text-sm ml-4 space-y-2">
            <p class="text-text-primary font-medium">CyberFolio</p>
            <p class="text-text-secondary">
              A beautiful dark-themed personal website template.
            </p>
          </div>
        </div>
      </div>

      <!-- STACK -->
      <div class="mt-12 border border-border-color rounded-lg">
        <div class="p-6 space-y-6">
          <!-- Title -->
          <div>
            <p class="font-medium text-text-primary">Stack</p>
            <p class="text-text-secondary text-sm">
              Software and resources I use regularly.
            </p>
          </div>

          <!-- Stack 1 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- Stack 2 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- Stack 3 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- All Tools -->
          <router-link
            to="/stack"
            class="border border-border-color rounded-lg bg-bg-navbar p-2 justify-center flex text-text-primary font-medium"
          >
            All Tools
          </router-link>
        </div>
      </div>

      <!-- STAY UP TO DATE -->
      <div class="mt-12 border border-border-color rounded-lg">
        <div class="p-6 space-y-6">
          <!-- Title -->
          <div>
            <p class="font-medium text-text-primary">Stay up to date</p>
            <p class="text-text-secondary text-sm">
              Get notified when new products and articles are published.
            </p>
          </div>

          <!-- Form Email -->
          <div class="flex space-x-3 text-sm">
            <input
              type="text"
              placeholder="Your email"
              class="basis-3/4 rounded-lg bg-bg-navbar placeholder:text-text-secondary text-text-primary border-none focus:ring-0"
            />
            <button
              class="basis-1/4 bg-bg-navbar p-1 text-text-primary font-medium rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
