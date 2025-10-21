<script setup>
useSeoMeta({
  title:
    "7H Ställning AB - Uthyrning & Montering av Byggställningar | Professionella Ställningslösningar",
  description:
    "7H Ställning AB erbjuder uthyrning och professionell montering av byggställningar. Moderna säkra ställningar, flexibla hyresperioder och snabb leverans. Ring för kostnadsfri offert!",
  ogTitle: "7H Ställning AB - Uthyrning & Montering av Byggställningar",
  ogDescription:
    "Professionella byggställningar för alla projekt. Uthyrning, montering och komplett service. Kostnadsfria offerter och lokal närvaro. Kontakta oss idag!",
  ogImage: "/jackson-allan-M48wzb6VlEA-unsplash.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "7H Ställning AB - Byggställningar & Professionell Montering",
  twitterDescription:
    "Moderna byggställningar, professionell montering och flexibla lösningar för alla byggprojekt. Ring för kostnadsfri offert!",
  twitterImage: "/jackson-allan-M48wzb6VlEA-unsplash.jpg",
});

definePageMeta({
  ssr: true,
});
</script>

<template>
  <div
    class="relative flex h-[65vh] min-h-[50rem] w-full items-center justify-center px-4 text-center md:pl-52 lg:pl-100 xl:pl-140"
  >
    <div class="absolute inset-0">
      <NuxtImg
        src="man-on-scaffold.jpg"
        alt="man walking on scaffold in city and with autumn leaves in the background"
        class="h-full w-full object-cover object-[10%_50%] sm:object-[50%_50%]"
        sizes="640px md:768px lg:1024px xl:1280px xxl:1536px"
        width="2048"
        height="956"
        densities="x1"
        format="webp"
      />
    </div>

    <div class="absolute inset-0 bg-black opacity-40"></div>

    <h1 class="relative px-4 text-white">
      Vi hyr ut och monterar byggnadställningar för alla era projekt, oavsett
      storlek!
    </h1>
  </div>

  <div class="px-8 py-32 md:px-52 xl:px-96">
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

    <div
      class="mx-auto mt-8 mb-24 h-px w-1/3 justify-self-center bg-black/10"
    ></div>

    <div
      class="mb-20 grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <PointBlob
        class="place-self-center"
        title="Uthyrning av Byggställningar"
        :point-lines="[
          'Moderna och säkra ställningar',
          'Flexibla hyresperioder',
          'Snabb leverans',
        ]"
        point-type="dot"
        point-width="small"
      />

      <NuxtImg
        src="red-house-scaffolding.jpg"
        alt="a red brick house dressed in scaffolding"
        class="h-full w-full object-cover"
        sizes="640px lg:768px"
        width="1512"
        height="2016"
        densities="x1"
        format="webp"
      />
    </div>

    <div
      class="mb-20 grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <PointBlob
        class="flex items-center place-self-center md:order-last"
        title="Professionell Montering"
        :point-lines="[
          'Stor erfarenhet',
          'Professionell installation',
          'Säker installation enligt gällande regler',
          'Rådgivning om optimal lösning',
        ]"
        point-type="dot"
        point-width="small"
      />

      <NuxtImg
        src="man-looking-out-from-scaffold.jpg"
        alt="a man in a yellow west looking out from a scaffolding construction in a city"
        class="h-full w-full object-cover"
        sizes="640px lg:768px"
        width="956"
        height="2048"
        densities="x1"
        format="webp"
      />
    </div>

    <div
      class="my-20 flex flex-col items-center justify-center bg-neutral-800 px-8 py-40 text-white md:px-40"
    >
      <h3 class="mb-8 text-center">Samarbete med Byggpartners</h3>

      <p class="px-4 text-center">
        Vi har nära samarbete med flera kompetenta partners inom byggbranschen,
        vilket gör att vi kan erbjuda er hjälp med snickerier, målning och
        takbyten - oavsett om det gäller tegel, plåt eller papp.
      </p>

      <div class="my-24 grid w-full gap-4 sm:grid-cols-2">
        <NuxtImg
          src="house-green-windows-front.jpg"
          alt="a white wood house front covered with scaffolding"
          sizes="640px lg:768px"
          width="1512"
          height="2016"
          densities="x1"
          format="webp"
        />

        <NuxtImg
          src="house-green-windows-side.jpg"
          alt="a white wood house side covered with scaffolding"
          sizes="640px lg:768px"
          width="1512"
          height="2016"
          densities="x1"
          format="webp"
        />
      </div>

      <h3 class="mb-8 text-center">Varför Välja 7H Ställning AB?</h3>

      <PointBlob
        class="flex items-center place-self-center md:order-last [&_li]:text-center [&_ul]:items-center"
        :point-lines="[
          'Kostnadsfria Offerter - Ring så räknar vi fram det bästa priset för ditt projekt',
          'Lokal Närvaro - Vi finns här när du behöver oss',
          'Komplett Service - Från planering till nedmontering',
          'Säkerhet Först - All utrustning kontrolleras regelbundet',
        ]"
        point-type="checkbox"
        point-width="medium"
      />
    </div>

    <div
      id="contact-section"
      class="grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <PointBlob
        class="flex items-center place-self-center text-center md:order-last md:text-left"
        title="Kontakta Oss Idag!"
        :point-lines="[
          'Ring för kostnadsfri offert:',
          '',
          '📞 Kristoffer: <a href=\'tel:0733286381\' class=\'underline hover:opacity-75\'>0733-28 63 81</a>',
          '📞 Tobias: <a href=\'tel:0704770070\' class=\'underline hover:opacity-75\'>0704-77 00 70</a>',
          '',
          'Vi återkommer snabbt med en skräddarsydd lösning för ditt projekt!',
        ]"
      />

      <NuxtImg
        src="inside-scaffolding-construction.jpg"
        alt="scaffolding construction at side of a house wall and with protective garment on the other side"
        class="h-full w-full object-cover"
        sizes="640px lg:768px"
        width="1170"
        height="1560"
        densities="x1"
        format="webp"
      />
    </div>

    <div class="bg-neutral-200 pt-32">
      <div
        class="mx-auto mb-12 h-px w-1/3 justify-self-center bg-black/10"
      ></div>

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
