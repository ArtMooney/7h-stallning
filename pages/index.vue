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
    class="relative flex h-[80vh] min-h-[50rem] w-full items-center justify-center px-4 text-center md:px-52"
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

    <h1 class="relative px-4 text-white">
      Vi hyr ut och monterar byggnadställningar för alla era projekt, oavsett
      storlek!
    </h1>
  </div>

  <div class="px-8 py-20 md:px-40">
    <h3 class="text-center">Professionella Ställningslösningar</h3>

    <p class="text-center">
      Behöver du byggställningar för ditt projekt? Vi på 7H Ställning AB
      erbjuder kompletta lösningar från uthyrning till montering. Oavsett om det
      gäller småskalig renovering eller större byggprojekt - vi har rätt
      utrustning för dig.
    </p>
  </div>

  <div class="bg-neutral-200 py-32">
    <h3 class="text-center">Våra Tjänster</h3>

    <div class="mt-8 mb-24 h-px w-2/3 justify-self-center bg-black/10"></div>

    <div
      class="mb-20 grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <PointBlob
        class="place-self-center"
        title="Uthyrning av Byggställningar"
        :point-lines="[
          '• Moderna och säkra ställningar',
          '• Flexibla hyresperioder',
          '• Snabb leverans',
        ]"
      />

      <NuxtImg
        src="pexels-joshsorenson-154141.jpg"
        alt=""
        class="h-full w-full object-cover"
        sizes="500px md:1000px xl:2000px"
        width="2560"
        height="1707"
        densities="x1"
      />
    </div>

    <div
      class="mb-20 grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <PointBlob
        class="flex items-center place-self-center md:order-last"
        title="Professionell Montering"
        :point-lines="[
          '• Stor erfarenhet',
          '• Professionell installation',
          '• Säker installation enligt gällande regler',
          '• Rådgivning om optimal lösning',
        ]"
      />

      <NuxtImg
        src="fredrik-b-hJ1G1KJpe0w-unsplash.jpg"
        alt=""
        class="h-full w-full object-cover"
        sizes="500px md:1000px xl:2000px"
        width="3646"
        height="5469"
        densities="x1"
      />
    </div>

    <div class="mt-20 bg-black px-8 py-20 text-white md:px-40">
      <h3 class="text-center">Samarbete med Byggpartners</h3>

      <p class="text-center">
        Vi har nära samarbete med flera kompetenta partners inom byggbranschen,
        vilket gör att vi kan erbjuda er hjälp med snickerier, målning och
        takbyten - oavsett om det gäller tegel, plåt eller papp.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
