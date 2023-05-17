<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-[80vh]">
      <div class="md:min-h-[384px] min-h-[240px]">
        <Transition name="fade">
          <img
            v-show="contentLoaded"
            src="/img/notfound.png"
            alt="notfound"
            class="md:h-96 h-60 rounded-lg"
          />
        </Transition>
      </div>
      <p class="text-white text-center mt-8 text-2xl font-semibold">
        Page Not Found
      </p>
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
  data() {
    return {
      contentLoaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 200);
  },
};
</script>
