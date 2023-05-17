<template>
  <div class="sm:ml-64">
    <div class="xl:px-80 lg:px-32 md:px-28 px-10 md:pt-24 pt-10 min-h-[80vh]">
      <div class="space-y-6">
        <router-link
          to="/projects"
          class="flex text-text-secondary text-sm font-medium transition duration-300 hover:text-text-primary space-x-2"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-3 mt-1"
            fill="currentColor"
            viewBox="0 0 20 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="ui-gambling-website-lined-icnos-casinoshunter"
                transform="translate(-1641.000000, -158.000000)"
                fill="currentColor"
                fill-rule="nonzero"
              >
                <g id="1" transform="translate(1350.000000, 120.000000)">
                  <path
                    d="M317.812138,38.5802109 L328.325224,49.0042713 L328.41312,49.0858421 C328.764883,49.4346574 328.96954,49.8946897 329,50.4382227 L328.998248,50.6209428 C328.97273,51.0514917 328.80819,51.4628128 328.48394,51.8313977 L328.36126,51.9580208 L317.812138,62.4197891 C317.031988,63.1934036 315.770571,63.1934036 314.990421,62.4197891 C314.205605,61.6415481 314.205605,60.3762573 314.990358,59.5980789 L322.274264,52.3739093 L292.99947,52.3746291 C291.897068,52.3746291 291,51.4850764 291,50.3835318 C291,49.2819872 291.897068,48.3924345 292.999445,48.3924345 L322.039203,48.3917152 L314.990421,41.4019837 C314.205605,40.6237427 314.205605,39.3584519 314.990421,38.5802109 C315.770571,37.8065964 317.031988,37.8065964 317.812138,38.5802109 Z"
                    id="left-arrow"
                    transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          <span>All Projects</span>
        </router-link>

        <p class="text-text-primary text-4xl font-semibold">
          {{ project.title }}
        </p>
        <div class="min-h-[240px]">
          <Transition name="fade">
            <img
              v-show="contentLoaded"
              :src="project.image"
              :alt="project.title"
              class="h-60 w-full rounded-lg object-cover"
            />
          </Transition>
        </div>
        <p class="text-text-secondary text-sm">
          {{ project.text }}
        </p>

        <div class="min-h-[240px]">
          <Transition name="fade">
            <img
              v-show="contentLoaded"
              :src="project.image2"
              :alt="project.title"
              class="h-60 w-full rounded-lg object-cover"
            />
          </Transition>
        </div>

        <!-- <div class="font-medium text-text-primary">
          <a
            target="_blank"
            :href="project.link"
            class="pt-1 pb-2 px-3 border border-border-color bg-bg-navbar rounded-lg"
          >
            Look Project
          </a>
        </div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import { projects } from "../../db/db.json";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      project: {},
      contentLoaded: false,
    };
  },
  mounted() {
    this.project = projects.find(
      (project) => project.title === this.$route.params.title
    );
    setTimeout(() => {
      this.contentLoaded = true;
    }, 200);
  },
};
</script>
