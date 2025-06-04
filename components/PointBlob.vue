<template>
  <div class="h-fit w-fit">
    <div class="flex flex-col gap-2 p-8">
      <h4 v-if="title" class="font-bold">{{ title }}</h4>

      <ul v-if="pointLines" class="flex flex-col space-y-4 leading-normal">
        <li v-for="line in pointLines">{{ line }}</li>
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
  },
};
</script>
