<template>
  <q-page class="q-mx-auto my-page">
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

</script>

<style scoped lang="css">
.my-gallery-card {
  min-height: 100%;
}

.my-page {
  width: 100%;
  height: 85vh;
}
</style>
