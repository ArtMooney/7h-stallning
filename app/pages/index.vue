<script setup>
const config = useRuntimeConfig();
const imageBaseUrl = config.public.imageBaseUrl;
const staticContentStore = useStaticContentStore();
const staticContent = computed(
  () => staticContentStore.getContentByTitle("page - Index").content,
);

useCmsSeo("SEO page - Index");

definePageMeta({
  ssr: true,
});
</script>

<template>
  <div
    class="relative flex h-[65vh] min-h-200 w-full items-center justify-center px-4 text-center md:pl-52 lg:pl-100 xl:pl-140"
  >
    <div class="absolute inset-0">
      <NuxtImg
        :src="`${imageBaseUrl}/cms-files/${staticContent.heading.image}`"
        :alt="staticContent.heading.imageAlt"
        class="h-full w-full object-cover object-[10%_50%] sm:object-[50%_50%]"
        sizes="1024px xl:1280px 2xl:1536px"
        width="2048"
        height="956"
        densities="x1"
        format="webp"
      />
    </div>

    <div class="absolute inset-0 bg-black opacity-40"></div>

    <h1 class="relative px-4 text-white">
      {{ staticContent.heading.title }}
    </h1>
  </div>

  <div class="px-8 py-32 md:px-52 xl:px-96">
    <h3 class="text-center">{{ staticContent.section.title }}</h3>

    <p v-html="formatText(staticContent.section.text)" class="text-center"></p>
  </div>

  <div class="bg-neutral-200 py-32">
    <h2 class="text-center">{{ staticContent.services.title }}</h2>

    <div
      class="mx-auto mt-8 mb-24 h-px w-1/3 justify-self-center bg-black/10"
    ></div>

    <div
      class="mb-20 grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <PointBlob
        class="place-self-center"
        :title="staticContent.services.listTitle1"
        :text="staticContent.services.listText1"
      />

      <NuxtImg
        :src="`${imageBaseUrl}/cms-files/${staticContent.services.image1}`"
        :alt="staticContent.services.image1Alt"
        class="h-full w-full object-cover"
        sizes="640px md:400px lg:570px xl:620px"
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
        :title="staticContent.services.listTitle2"
        :text="staticContent.services.listText2"
      />

      <NuxtImg
        :src="`${imageBaseUrl}/cms-files/${staticContent.services.image2}`"
        :alt="staticContent.services.image2Alt"
        class="h-full w-full object-cover"
        sizes="640px md:280px lg:380px xl:420px"
        width="956"
        height="2048"
        densities="x1"
        format="webp"
      />
    </div>

    <div
      class="my-20 flex flex-col items-center justify-center bg-neutral-800 px-8 py-40 text-white md:px-40"
    >
      <h3 class="mb-8 text-center">{{ staticContent.cooperation.title }}</h3>

      <p
        v-html="formatText(staticContent.cooperation.text)"
        class="px-4 text-center"
      ></p>

      <div class="my-24 grid w-full gap-4 sm:grid-cols-2">
        <NuxtImg
          :src="`${imageBaseUrl}/cms-files/${staticContent.cooperation.imageLeft}`"
          :alt="staticContent.cooperation.imageLeftAlt"
          sizes="640px sm:350px lg:480px xl:600px"
          width="1512"
          height="2016"
          densities="x1"
          format="webp"
        />

        <NuxtImg
          :src="`${imageBaseUrl}/cms-files/${staticContent.cooperation.imageRight}`"
          :alt="staticContent.cooperation.imageRightAlt"
          sizes="640px sm:350px lg:480px xl:600px"
          width="1512"
          height="2016"
          densities="x1"
          format="webp"
        />
      </div>

      <h3 class="mb-8 text-center">{{ staticContent.whyChooseUs.title }}</h3>

      <PointBlob
        class="flex items-center place-self-center md:order-last [&_div]:text-center"
        :text="staticContent.whyChooseUs.text"
      />
    </div>

    <div
      id="contact-section"
      class="grid px-8 sm:px-12 md:mb-0 md:grid-cols-[0.5fr_0.75fr] xl:px-32"
    >
      <div
        class="flex w-full flex-col items-center place-self-center px-16 text-center md:order-last md:items-start md:text-left"
      >
        <PointBlob
          :title="staticContent.contact.title"
          :text="staticContent.contact.text"
        />

        <div class="md:ml-8">
          📞 {{ staticContent.contact.phoneName1 }}:
          <a
            :href="'tel:' + staticContent.contact.phoneNumber1"
            class="underline hover:opacity-75"
            >{{ staticContent.contact.phoneNumber1 }}</a
          >
        </div>
        <div class="md:ml-8">
          📞 {{ staticContent.contact.phoneName2 }}:
          <a
            :href="'tel:' + staticContent.contact.phoneNumber2"
            class="underline hover:opacity-75"
            >{{ staticContent.contact.phoneNumber2 }}</a
          >
        </div>

        <PointBlob :text="staticContent.contact.serviceText" />
      </div>

      <NuxtImg
        :src="`${imageBaseUrl}/cms-files/${staticContent.contact.image}`"
        :alt="staticContent.contact.imageAlt"
        class="h-full w-full object-cover"
        sizes="640px sm:670px md:370px lg:480px xl:520px"
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

      <p
        v-html="formatText(staticContent.pageSubtext.text)"
        class="mx-16 text-center italic"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
