<script setup>
import Button from "./elements/Button.vue";
</script>

<template>
  <div id="navbar" class="relative z-10 bg-white">
    <div
      v-if="showNavbar"
      @click="showNavbar = false"
      class="fixed inset-0"
    ></div>

    <div
      class="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-2"
    >
      <router-link to="/">
        <NuxtImg
          src="7h-logo.png"
          alt="company logo"
          class="h-auto w-24 p-1 xl:w-32 xl:p-2"
        />
      </router-link>

      <Icon
        name="heroicons:bars-2"
        @click="showNavbar = !showNavbar"
        class="block h-8 min-h-8 w-8 min-w-8 cursor-pointer xl:!hidden"
      />

      <div
        class="fixed top-0 right-0 bottom-0 left-auto flex flex-col items-end justify-start gap-5 px-8 pt-24 pb-10 text-center transition-all duration-300 ease-in-out xl:static xl:flex-row xl:items-center xl:bg-transparent xl:p-0"
        :class="[
          showNavbar
            ? 'absolute overflow-auto bg-neutral-500 xl:flex'
            : 'absolute translate-x-100 xl:flex xl:translate-x-0',
        ]"
      >
        <Icon
          v-if="showNavbar"
          @click="showNavbar = !showNavbar"
          name="iconoir:xmark"
          class="absolute top-4 right-4 h-8 min-h-8 w-8 min-w-8 cursor-pointer"
          :class="[showNavbar && 'xl:!hidden']"
        />

        <div class="group relative">
          <Button
            @click="showNavbar = false"
            text="Kontakta oss"
            link="/kontakta-oss"
            type="button"
            styling="dark"
            class="w-full opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      showNavbar: false,
      scrollY: 0,
      originalPaddingRight: 0,
    };
  },

  computed: {
    currentPath() {
      return this.$route.path;
    },
  },

  methods: {
    stopScrolling() {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      this.scrollY = window.scrollY;
      this.originalPaddingRight = document.body.style.paddingRight;

      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollY}px`;
      document.body.style.width = "100%";
    },

    startScrolling() {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = this.originalPaddingRight;

      window.scrollTo(0, this.scrollY);
    },
  },

  watch: {
    showNavbar(newValue) {
      if (newValue) {
        this.stopScrolling();
      } else {
        this.startScrolling();
      }
    },
  },
};
</script>
