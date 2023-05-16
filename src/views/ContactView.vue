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
              <img src="/img/icon/whatsapp.png" class="w-5" alt="whatsapp" />
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
              <img src="/img/icon/mail.png" alt="email" class="w-5 h-5" />
              <span>Email</span>
            </a>
          </button>
        </div>
      </div>

      <p class="text-text-primary font-medium mt-12 text-lg">Send a message</p>
      <!-- FORM -->
      <form
        action=""
        @submit.prevent="tesPopup"
        class="mt-6 grid grid-cols-2 gap-3 text-text-primary"
      >
        <input
          type="text"
          class="rounded-lg bg-bg-navbar border-none focus:ring-0 placeholder:text-text-secondary text-sm"
          placeholder="Name"
          v-model="name"
          required
        />
        <input
          type="text"
          class="rounded-lg bg-bg-navbar border-none focus:ring-0 placeholder:text-text-secondary text-sm"
          placeholder="Your Email"
          v-model="email"
          required
        />
        <textarea
          type="text"
          class="col-span-2 rounded-lg bg-bg-navbar border-none focus:ring-0 placeholder:text-text-secondary text-sm h-40"
          placeholder="Message"
          v-model="message"
          required
        />
        <button
          type="submit"
          class="p-2 col-span-2 rounded-lg font-medium bg-bg-navbar border-none focus:ring-0"
        >
          {{ submitText }}
        </button>
      </form>
      <div v-if="showSuccess" class="popup">
        <div class="popup-content sm:ml-64 rounded-lg space-y">
          <p class="text-xl font-bold">Message sent successfully!</p>
          <p class="mb-4">Your message will be followed up soon.</p>
          <hr />
          <button
            class="mt-4 border border-bg-navbar px-2 rounded-md hover:bg-bg-navbar hover:text-text-primary transition duration-300"
            @click="closePopup"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import emailjs from "emailjs-com";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      submitText: "Send now",
      showSuccess: false,
    };
  },
  methods: {
    sendEmail() {
      this.submitText = "Sending...";

      emailjs.init(import.meta.env.VITE_USER_ID);

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        )
        .then(() => {
          this.showSuccess = true;
          this.name = "";
          this.email = "";
          this.message = "";
          this.submitText = "Send now";
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat mengirim email:", error);
        });
    },
    closePopup() {
      this.showSuccess = false;
    },
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  text-align: center;
}
</style>
