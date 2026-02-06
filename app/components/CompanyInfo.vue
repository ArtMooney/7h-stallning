<template>
  <div
    ref="companyInfo"
    class="flex flex-wrap justify-center gap-x-3 gap-y-2 justify-self-center text-xs [&>a]:underline [&>a]:opacity-40 [&>a]:hover:opacity-50 [&>p]:opacity-40"
  >
    <p>7H Ställning AB</p>
    <p>Bergkullavägen 5</p>
    <p>511 62 Skene</p>
    <a href="tel:0704-77 00 70">Tel. 0704-77 00 70</a>
    <a href="tel:0733-28 63 81">Tel. 0733-28 63 81</a>
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
