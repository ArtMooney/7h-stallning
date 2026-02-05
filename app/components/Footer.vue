<script setup>
import IconHeart from "~icons/emojione-v1/growing-heart";
import IconEdit from "~icons/mage/edit";
</script>

<template>
  <div
    class="relative grid items-center gap-12 bg-neutral-300 px-12 pt-20 pb-12 md:grid-cols-[0.5fr_2fr_0.5fr] md:gap-8"
  >
    <NuxtLink to="/" class="justify-self-center! md:justify-self-start">
      <NuxtImg
        src="7h-logo.png"
        alt="footer logo"
        class="relative h-auto w-20 min-w-20 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"
        sizes="100px md:300px"
        width="718"
        height="518"
        densities="x1"
        format="webp"
      />
    </NuxtLink>

    <CompanyInfo />

    <SocialMediaIcons class="h-full md:justify-self-end" />

    <div
      class="col-span-1 my-4 h-px w-2/3 justify-self-center bg-black/10 md:col-span-3 xl:w-1/3"
    ></div>

    <a
      class="flex items-center justify-self-center text-xs opacity-20 hover:opacity-30 md:col-span-3"
      href="https://www.framecore.se"
      target="_blank"
    >
      Powered by
      <span><IconHeart class="h-6 min-h-6 w-6 min-w-6 px-1" /></span>
      FrameCore
    </a>

    <NuxtLink to="/admin" class="absolute bottom-2 left-2">
      <IconEdit class="size-6 opacity-20 hover:opacity-30" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
