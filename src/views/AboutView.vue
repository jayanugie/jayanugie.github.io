<template>
  <div class="sm:ml-64 min-h-[100vh]">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10">
      <!-- CONTENT -->
      <div class="space-y-6">
        <p class="text-text-primary text-4xl font-semibold">About Nugie</p>
        <p class="font-medium text-text-primary">
          Web Developer at IT consulting company who loves code.
        </p>
        <img src="/img/nugie.jpg" alt="nugie" class="h-96 rounded-lg" />
        <p class="text-text-secondary text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          delectus expedita voluptatem quibusdam. Beatae ducimus cum nisi sit ex
          voluptatibus deleniti ipsam mollitia, tenetur aut nihil, ullam quam at
          numquam!
        </p>
        <p class="text-text-secondary text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          possimus eius iure ratione voluptatibus suscipit animi dicta qui
          sapiente eum sed magnam officiis, quod accusamus laboriosam libero,
          voluptas quisquam reiciendis.
        </p>
        <p class="text-text-secondary text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          laudantium earum ut voluptate quidem magni! Maiores dolor sunt, ut
          odit neque saepe quia fuga, ab tenetur debitis, quae reprehenderit
          similique.
        </p>
        <div class="space-x-4 flex font-medium text-text-primary">
          <router-link
            to="/contact"
            class="pt-1 pb-2 px-3 border border-border-color bg-bg-navbar rounded-lg"
          >
            Get in touch
          </router-link>
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
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    Footer,
  },
};
</script>
