<script setup>
import Button from "./elements/Button.vue";
</script>

<template>
  <div
    id="navbar"
    class="relative z-10 flex w-full items-center justify-between bg-white px-8 py-2"
  >
    <NuxtLink to="/">
      <NuxtImg
        src="7h-logo.png"
        alt="company logo"
        class="h-auto w-24 p-1 xl:w-32 xl:p-2"
      />
    </NuxtLink>

    <Button
      text="Kontakta oss"
      link="/"
      hash="#contact-section"
      type="button"
      styling="dark"
      class="opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
    />
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
