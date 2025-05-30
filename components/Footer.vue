<template>
  <div
    class="relative grid items-start gap-12 bg-neutral-400 px-12 pt-20 pb-12 md:grid-cols-[0.5fr_1fr_0.5fr] md:gap-8"
  >
    <NuxtLink to="/">
      <NuxtImg
        src="7h-logo.png"
        alt="footer logo"
        class="relative h-auto w-20 min-w-20 justify-self-center opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100 md:justify-self-start"
      />
    </NuxtLink>

    <p
      class="flex h-full flex-wrap items-center justify-center text-xs leading-5"
    >
      <span class="opacity-40">7H Ställning AB</span>
      <span class="px-3 opacity-35">|</span>
      <span class="opacity-40">Bergkullavägen 5</span>
      <span class="px-3 opacity-35">|</span>
      <span class="opacity-40">511 62 Skene</span>
      <span class="px-3 opacity-35">|</span>
      <a class="underline opacity-40 hover:opacity-50" href="tel:0704-77 00 70"
        >Tel. 0704-77 00 70</a
      >
      <span class="px-3 opacity-35">|</span>
      <a class="underline opacity-40 hover:opacity-50" href="tel:0733-28 63 81"
        >Tel. 0733-28 63 81</a
      >
    </p>

    <SocialMediaIcons class="h-full md:justify-self-end" />

    <div
      class="col-span-1 my-4 h-px w-2/3 justify-self-center bg-black/10 md:col-span-3 xl:w-1/3"
    ></div>

    <a
      class="flex justify-self-center text-xs opacity-20 hover:opacity-30 md:col-span-3"
      href="https://www.framecore.se"
      target="_blank"
    >
      Powered by
      <span
        ><Icon
          name="emojione-v1:growing-heart"
          class="h-4 min-h-4 w-4 min-w-4 px-3"
      /></span>
      FrameCore
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
