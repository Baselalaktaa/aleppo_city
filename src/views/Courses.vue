<template>
  <q-page class="q-mx-auto">
    <SlidePhotoGallery
      class="my-gallery-card"
      computed-image-path-to-display="aleppo_castle.jpg"
      :slideImageItems="allSlideItems"
    />
  </q-page>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import SlidePhotoGallery from "@/components/SlidePhotoGallery.vue";
import { allSlideImageItems, SlideImageItem } from "@/service/model";

const allSlideItems: Ref<SlideImageItem[]> = ref(allSlideImageItems);

const lorem = ref<string>(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);
</script>

<style scoped lang="css">
.my-gallery-card {
  width: 100%;
  height: 873px;
}
</style>
