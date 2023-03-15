<template>
  <div class="sm:ml-64 min-h-[100vh]">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10">
      <!-- TITLE -->
      <div class="text-text-primary space-y-6">
        <p class="text-4xl font-semibold">Stack</p>
        <p class="font-medium">Tools I use & love that you should check out.</p>
      </div>

      <!-- STACK -->
      <div class="mt-12 p-2">
        <div class="max-md:space-y-6 md:grid grid-cols-2 gap-6">
          <!-- Stack 1 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack 1</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- Stack 2 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack 2</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- Stack 3 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack 3</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- Stack 4 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack 4</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- Stack 5 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack 5</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>

          <!-- Stack 6 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack 6</p>
              <p class="text-text-secondary">Description</p>
            </div>
          </div>
          <!-- Stack 7 -->
          <div class="flex space-x-3">
            <img src="/img/phone.jpg" alt="stack" class="w-10 rounded-lg" />
            <div class="text-sm">
              <p class="text-text-primary font-medium">Stack 7</p>
              <p class="text-text-secondary">Description</p>
            </div>
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
