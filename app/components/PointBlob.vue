<template>
  <div class="h-fit w-fit">
    <div class="gap-2 p-8">
      <h4 v-if="title" :class="getPointWidth">{{ title }}</h4>

      <ul v-if="pointLines" class="flex flex-col space-y-4 leading-normal">
        <li v-for="line in pointLines">
          <span v-if="getPointSymbol" class="absolute" :class="getPointWidth">{{
            getPointSymbol
          }}</span>
          <span v-html="line"></span>
        </li>
      </ul>
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
    pointLines: {
      type: Array,
      required: false,
    },
    pointType: {
      type: String,
      required: false,
    },
    pointWidth: {
      type: String, // small, medium, large
      required: false,
    },
  },

  computed: {
    getPointSymbol() {
      if (this.pointType === "dot") return "•";
      if (this.pointType === "checkbox") return "✅";
      if (this.pointType === "arrow") return "→";
      return "";
    },

    getPointWidth() {
      if (this.pointWidth === "small") return "-ml-3";
      if (this.pointWidth === "medium") return "-ml-6";
      if (this.pointWidth === "large") return "-ml-9";
      return "";
    },
  },
};
</script>
