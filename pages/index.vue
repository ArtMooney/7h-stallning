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

  <div class="px-8 py-32 md:px-40">
    <h3 class="text-center">Professionella Ställningslösningar</h3>

    <p class="text-center">
      Behöver du byggställningar för ditt projekt? Vi på 7H Ställning AB
      erbjuder kompletta lösningar från uthyrning till montering. Oavsett om det
      gäller småskalig renovering eller större byggprojekt - vi har rätt
      utrustning för dig.
    </p>
  </div>

  <div class="bg-neutral-200 py-32">
    <h2 class="text-center">Våra Tjänster</h2>

    <div class="mt-8 mb-24 h-px w-1/3 justify-self-center bg-black/10"></div>

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
        width="3463"
        height="5194"
        densities="x1"
      />
    </div>

    <div class="my-20 bg-neutral-800 px-8 py-40 text-white md:px-40">
      <h3 class="mb-8 text-center">Samarbete med Byggpartners</h3>

      <p class="px-4 text-center">
        Vi har nära samarbete med flera kompetenta partners inom byggbranschen,
        vilket gör att vi kan erbjuda er hjälp med snickerier, målning och
        takbyten - oavsett om det gäller tegel, plåt eller papp.
      </p>

      <div class="my-40 h-px w-1/3 justify-self-center bg-white/10"></div>

      <h3 class="mb-8 text-center">Varför Välja 7H Ställning AB?</h3>

      <div class="flex flex-col items-center justify-center gap-2 px-4">
        <p>
          ✅ Kostnadsfria Offerter - Ring så räknar vi fram det bästa priset för
          ditt projekt
        </p>
        <p>✅ Lokal Närvaro - Vi finns här när du behöver oss</p>
        <p>✅ Komplett Service - Från planering till nedmontering</p>
        <p>✅ Säkerhet Först - All utrustning kontrolleras regelbundet</p>
      </div>
    </div>

    <div
      class="grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <PointBlob
        class="flex items-center place-self-center md:order-last"
        title="Kontakta Oss Idag!"
        :point-lines="[
          'Ring för kostnadsfri offert:',
          '',
          '📞 Kristoffer: 0704-77 00 70',
          '📞 Tobias: 0733-28 63 81',
          '',
          'Vi återkommer snabbt med en skräddarsydd lösning för ditt projekt!',
        ]"
      />

      <NuxtImg
        src="fredrik-b-LOuSbGQe504-unsplash.jpg"
        alt=""
        class="h-full w-full object-cover"
        sizes="500px md:1000px xl:2000px"
        width="4000"
        height="3000"
        densities="x1"
      />
    </div>

    <div class="bg-neutral-200 py-32">
      <div class="mb-12 h-px w-1/3 justify-self-center bg-black/10"></div>

      <p class="mx-16 text-center italic">
        I samarbete med Måleri Viskan och Nordsjö Idé & Design
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
