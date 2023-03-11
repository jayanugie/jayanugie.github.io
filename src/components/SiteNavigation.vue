<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-text-secondary bg-bg-navbar"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-bg-navbar">
      <ul class="space-y-2">
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <img
              src="/img/nugie.jpg"
              class="flex-shrink-0 w-6 h-6 rounded-full object-cover"
              xmlns="http://www.w3.org/2000/svg"
            />
            <div class="ml-3">
              <p class="text-text-primary text-sm">Nugie Jaya Nugraha</p>
              <p class="text-text-secondary text-xs">Fullstack Developer</p>
            </div>
          </router-link>
        </li>
        <hr class="border- border-text-secondary" />
        <li class="pt-5">
          <router-link
            to="/"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <svg
              class="w-6 h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 10L12 3L19 10L19 20H5L5 10Z" />
              <path d="M4.99999 10L12 3L19 10L19 20H5L4.99999 10Z" />
            </svg>
            <span class="ml-3">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/projects"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Projects</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/stack"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.719 12.375l0.313-2.656-4.219-4.281c0.906-0.438 1.938-0.719 3.031-0.719 3.781 0 6.844 3.031 6.844 6.844 0 0.563-0.094 1.188-0.219 1.75l7.781 7.75c1.406 1.438 1.531 3.625 0.25 4.906s-3.5 1.188-4.938-0.25l-7.594-7.656c-0.688 0.219-1.375 0.375-2.125 0.375-3.781 0-6.844-3.094-6.844-6.875 0-1.063 0.219-2 0.625-2.906l4.344 4.406z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Stack</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">About</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Contact</span>
          </router-link>
        </li>

        <li class="pt-5">
          <p class="p-2 text-text-secondary text-sm">Follow</p>
          <a
            href="https://www.linkedin.com/in/jayanugie/"
            target="_blank"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="2 2 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jayanugie"
            target="_blank"
            class="flex items-center p-2 text-base font-medium text-text-secondary rounded-lg hover:text-text-primary transition-all"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM7.5316 7.08431L7.53366 7.08355L7.53604 7.08267L7.54087 7.08091L7.55081 7.07737L7.57182 7.07025C7.58633 7.06549 7.60182 7.06074 7.6183 7.05608C7.65128 7.04675 7.68807 7.03782 7.72867 7.02994C8.20584 6.93729 9.0031 7.02006 10.1532 7.80058C10.1818 7.81993 10.2105 7.83971 10.2394 7.85992C10.2789 7.85029 10.3184 7.84099 10.3579 7.83202C11.4419 7.58611 12.5581 7.58611 13.6421 7.83202C13.6816 7.84099 13.7211 7.85028 13.7605 7.8599C13.7894 7.83969 13.8181 7.81993 13.8466 7.80058C14.9921 7.02276 15.7861 6.9371 16.2648 7.02957C16.3062 7.03756 16.3438 7.04667 16.3774 7.05621C16.3942 7.06098 16.41 7.06584 16.4248 7.07072L16.4462 7.07802L16.4564 7.08166L16.4613 7.08347L16.4637 7.08437L16.4649 7.08482L16.4661 7.08527C16.7354 7.1865 16.948 7.39879 17.0497 7.6679C17.0578 7.68938 17.0658 7.71087 17.0735 7.73236C17.3441 8.4823 17.4189 9.29796 17.297 10.0849C17.2897 10.1321 17.2816 10.1792 17.2729 10.2262C17.3025 10.2737 17.3312 10.3217 17.3591 10.3703C17.7894 11.1208 18.0102 11.9955 17.9996 12.8811C17.9985 14.7913 17.4961 16.151 16.5726 17.0527C15.6687 17.9353 14.517 18.2221 13.5643 18.3377L13.5629 18.3379C12.509 18.5143 11.488 18.5233 10.4308 18.366L10.4004 18.3619C9.45151 18.233 8.30946 17.9315 7.41451 17.0443C6.50083 16.1385 6.00148 14.7825 6.00036 12.8811C5.98983 11.9955 6.21063 11.1208 6.64093 10.3703C6.66873 10.3218 6.69739 10.2739 6.72693 10.2265C6.71815 10.1794 6.71008 10.1322 6.70271 10.0849C6.58079 9.30157 6.65298 8.48972 6.91854 7.74178C6.92686 7.71832 6.93539 7.69491 6.9441 7.67156C7.04549 7.39999 7.26002 7.18567 7.5316 7.08431Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Github</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { RouterLink } from "vue-router";
</script>
