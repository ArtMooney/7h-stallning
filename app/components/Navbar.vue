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
        sizes="100px md:300px"
        width="718"
        height="518"
        densities="x1"
        format="webp"
      />
    </NuxtLink>

    <NuxtLink to="/#contact-section">
      <button
        class="min-w-40 cursor-pointer rounded bg-neutral-700 px-6 py-3 text-center text-sm text-white duration-200 hover:bg-neutral-900"
      >
        Kontakta oss
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
