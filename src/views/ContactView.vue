<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-[80vh]">
      <!-- TITLE -->
      <div class="text-text-primary space-y-6">
        <p class="text-4xl font-semibold">Contact</p>
        <p class="font-medium">
          I'm always looking to collaborate on interesting projects with great
          people. Need a supportive hand? I have two!
        </p>
        <div class="space-x-4 flex font-medium">
          <button
            class="pt-1 pb-2 px-3 border border-border-color bg-bg-navbar rounded-lg"
          >
            <a
              href="https://wa.me/6282297718123"
              target="_blank"
              class="flex items-center space-x-1"
            >
              <img src="/img/whatsapp.png" class="w-5" alt="whatsapp" />
              <span>WhatsApp</span>
            </a>
          </button>
          <button
            class="pt-1 pb-2 px-3 border border-border-color bg-transparent rounded-lg"
          >
            <a
              href="mailto:jayanugie14@gmail.com"
              target="_blank"
              class="flex items-center space-x-1"
            >
              <img src="/img/mail.png" alt="email" class="w-5 h-5" />
              <span>Email</span>
            </a>
          </button>
        </div>
      </div>

      <p class="text-text-primary font-medium mt-12 text-lg">Send a message</p>
      <!-- FORM -->
      <form action="" class="mt-6 grid grid-cols-2 gap-3 text-text-primary">
        <input
          type="text"
          class="rounded-lg bg-bg-navbar border-none focus:ring-0 placeholder:text-text-secondary text-sm"
          placeholder="Name"
        />
        <input
          type="text"
          class="rounded-lg bg-bg-navbar border-none focus:ring-0 placeholder:text-text-secondary text-sm"
          placeholder="Email"
        />
        <textarea
          type="text"
          class="col-span-2 rounded-lg bg-bg-navbar border-none focus:ring-0 placeholder:text-text-secondary text-sm h-40"
          placeholder="Message"
        />
        <button
          type="text"
          class="col-span-2 rounded-lg font-medium bg-bg-navbar border-none focus:ring-0"
        >
          Send now
        </button>
      </form>
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
