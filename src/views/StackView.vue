<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-screen">
      <!-- TITLE -->
      <div class="text-text-primary space-y-6">
        <p class="text-4xl font-semibold">Stacks</p>
        <p class="font-medium">
          Language, technology, and tools I use regularly.
        </p>
      </div>

      <!-- STACK -->
      <Transition name="fade">
        <div class="mt-12 p-2" v-show="contentLoaded">
          <div class="max-md:space-y-6 md:grid grid-cols-2 gap-6">
            <!-- loop stack -->
            <div
              class="flex space-x-3"
              v-for="item in stacks"
              :key="item.title"
            >
              <img :src="item.image" alt="stack" class="w-10 h-10 rounded-lg" />
              <div class="text-sm">
                <p class="text-text-primary font-medium">{{ item.title }}</p>
                <p class="text-text-secondary">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import { stacks } from "../../db/db.json";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      stacks: [],
      contentLoaded: false,
    };
  },
  mounted() {
    this.stacks = stacks;
    setTimeout(() => {
      this.contentLoaded = true;
    }, 200);
  },
};
</script>
