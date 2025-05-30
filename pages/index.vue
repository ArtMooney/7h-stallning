<script setup>
useSeoMeta({
  title: "",
  description: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "",
  twitterTitle: "",
  twitterDescription: "",
  twitterImage: "",
});

definePageMeta({
  ssr: true,
});
</script>

<template>
  <div class="relative mx-[calc(-50vw+50%)] w-screen">
    <h1
      class="mb-8 text-3xl sm:text-4xl md:text-5xl md:leading-12 lg:text-6xl lg:leading-16"
    >
      Vi hyr ut och monterar byggnadställningar för alla era projekt, oavsett
      storlek!
    </h1>

    <div class="px-8 text-lg lg:text-2xl">
      Lokalt, regionalt eller rikstäckande - just DOOH* it!
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {};
  },
};
</script>
