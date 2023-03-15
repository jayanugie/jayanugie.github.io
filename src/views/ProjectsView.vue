<template>
  <div class="sm:ml-64 min-h-[100vh]">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10">
      <!-- TITLE -->
      <div class="text-text-primary space-y-6">
        <p class="text-4xl font-semibold">Projects</p>
        <p class="font-medium">
          Partnered with inspiring collaborators, innovators and brands.
        </p>
      </div>

      <!-- PROJECTS -->
      <div class="mt-12 space-y-4">
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
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
