<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-[80vh]">
      <!-- CONTENT -->
      <div class="space-y-6">
        <p class="text-text-primary text-4xl font-semibold">About Nugie</p>
        <p class="font-medium text-text-primary">
          Web Developer at IT consulting company who loves code.
        </p>
        <div class="min-h-[384px]">
          <Transition name="fade">
            <img
              v-show="contentLoaded"
              src="/img/nugie.jpg"
              alt="nugie"
              class="h-96 rounded-lg object-cover"
            />
          </Transition>
        </div>
        <p class="text-text-secondary text-sm">
          {{ paragraphOne }}
        </p>
        <p class="text-text-secondary text-sm">
          {{ paragraphTwo }}
        </p>
        <p class="text-text-secondary text-sm">
          {{ paragraphThree }}
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
            <a
              href="mailto:jayanugie14@gmail.com"
              target="_blank"
              class="flex items-center space-x-1"
            >
              <img src="/img/icon/mail.png" alt="copy" class="w-5 h-5" />
              <span>Email</span>
            </a>
          </button>
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
  data() {
    return {
      paragraphOne:
        "As a graduate in the field of Accounting, I embarked on a unique journey driven by my passion and dedication for programming. With a keen interest in the world of coding, I took it upon myself to self-study and eventually enrolled in a rigorous bootcamp to become a full-stack developer. Along the way, I embraced various freelance projects that allowed me to apply and enhance my skills. Today, I find myself thriving in a dynamic role as a full-stack developer at an insurance brokerage company, where I am responsible for managing and maintaining their intricate systems.",
      paragraphTwo:
        "My transition from the realm of numbers to the world of programming has been an exciting and fulfilling adventure. While my academic background in Accounting has provided me with a strong foundation in analytical thinking and problem-solving, my passion for programming has allowed me to explore a whole new dimension of creativity and innovation. Through constant learning and practical experience, I have honed my skills in both front-end and back-end development, enabling me to craft comprehensive and efficient solutions for complex business challenges.",
      paragraphThree:
        "What truly sets me apart is my ability to merge my financial acumen with my technical expertise. With a deep understanding of accounting principles, I possess a unique perspective when it comes to developing software solutions for financial institutions. By blending my knowledge of the industry's intricacies with my proficiency in programming languages and frameworks, I strive to create robust and user-friendly systems that not only streamline processes but also elevate the overall user experience. With each project I undertake, my goal is to contribute to the success of organizations by providing innovative technological solutions tailored to their specific needs.",
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
