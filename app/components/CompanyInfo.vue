<script setup>
const staticContentStore = useStaticContentStore();
const staticContent = computed(
  () => staticContentStore.getContentByTitle("Component - CompanyInfo").content,
);
</script>

<template>
  <div
    ref="companyInfo"
    class="flex flex-wrap justify-center gap-x-3 gap-y-2 justify-self-center text-xs [&>a]:underline [&>a]:opacity-40 [&>a]:hover:opacity-50 [&>p]:opacity-40"
  >
    <p v-if="staticContent.company">{{ staticContent.company }}</p>
    <p v-if="staticContent.address">{{ staticContent.address }}</p>
    <p v-if="staticContent.address2">{{ staticContent.address2 }}</p>
    <a v-if="staticContent.phone" :href="`tel:${staticContent.phone}`"
      >Tel. {{ staticContent.phone }}</a
    >
    <a v-if="staticContent.phone2" :href="`tel:${staticContent.phone2}`">
      Tel. {{ staticContent.phone2 }}
    </a>
    <a
      v-if="staticContent.email1"
      :href="`mailto:${staticContent.email1}`"
      class="underline hover:opacity-50"
    >
      Email. {{ staticContent.email1 }}
    </a>
    <a
      v-if="staticContent.email2"
      :href="`mailto:${staticContent.email2}`"
      class="underline hover:opacity-50"
    >
      Email. {{ staticContent.email2 }}
    </a>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",

  mounted() {
    this.addSeparators();
    window.addEventListener("resize", this.addSeparators);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.addSeparators);
  },

  methods: {
    addSeparators() {
      const infoElements = this.$refs.companyInfo.querySelectorAll("a, p");

      for (const [index, infoElement] of infoElements.entries()) {
        if (
          index > 0 &&
          infoElement.offsetTop === infoElements[index - 1].offsetTop
        ) {
          infoElement.classList.add("border-l", "border-black/20", "pl-3");
        } else {
          infoElement.classList.remove("border-l", "border-black/20", "pl-3");
        }
      }
    },
  },
};
</script>
