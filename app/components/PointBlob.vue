<template>
  <div class="h-fit w-fit">
    <div class="gap-2 p-8">
      <h4 v-if="title">{{ title }}</h4>

      <div v-html="splitText(text)" class="[&_p]:mb-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PointBlob",

  props: {
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },

  methods: {
    splitText(text) {
      const lines = formatText(text).split("<br>");
      const elements = lines.map(
        (line) => `<p >${line.replace(/\*/g, "•")}</p>`,
      );

      return elements.join("");
    },
  },
};
</script>
