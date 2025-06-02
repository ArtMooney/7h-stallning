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
  <div
    class="relative flex h-[80vh] min-h-[50rem] w-full items-center justify-center p-52 text-center"
  >
    <div class="absolute inset-0">
      <NuxtImg
        src="jackson-allan-M48wzb6VlEA-unsplash.jpg"
        alt=""
        class="h-full w-full object-cover"
        sizes="1000px md:2000px"
        width="3241"
        height="4862"
        densities="x1"
        placeholder
      />
    </div>

    <div class="absolute inset-0 bg-black opacity-40"></div>

    <div class="relative text-white">
      <h1>
        Vi hyr ut och monterar byggnadställningar för alla era projekt, oavsett
        storlek!
      </h1>
    </div>
  </div>

  <div class="px-40 py-20">
    <h3 class="text-center">Professionella Ställningslösningar</h3>

    <p class="text-center">
      Behöver du byggställningar för ditt projekt? Vi på 7H Ställning AB
      erbjuder kompletta lösningar från uthyrning till montering. Oavsett om det
      gäller småskalig renovering eller större byggprojekt - vi har rätt
      utrustning för dig.
    </p>
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
