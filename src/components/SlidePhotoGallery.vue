<template>
  <q-carousel
    v-model="slide"
    transition-prev="fade"
    transition-next="fade"
    swipeable
    animated
    padding
    arrows
    thumbnails
    class="bg-blue-1 text-white shadow-1 rounded-borders"
    :fullscreen="triggerFullscreen"
  >
    <q-carousel-slide
      v-for="item in computedSlideImageItems"
      :key="item.slideName"
      :img-src="require(`@/assets/${item.imageName}`)"
      :name="item.slideName"
      class="column no-wrap flex-center"
    >
      <div class="absolute-top-right">
        <q-btn
          rounded
          flat
          dense
          no-caps
          icon="fullscreen"
          @click="triggerFullscreenFun"
        >
          <q-tooltip> Fullscreen </q-tooltip>
        </q-btn>
      </div>
      <div v-if="triggerFullscreen" class="q-mt-md text-center">
        {{ item.text }}
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import { SlideImageItem } from "@/service/model";

const props = defineProps<{
  computedImagePathToDisplay: string;
  slideImageItems: SlideImageItem[];
}>();

const triggerFullscreen = ref<boolean>(false);

function triggerFullscreenFun() {
  triggerFullscreen.value = !triggerFullscreen.value;
}

const computedSlideImageItems = computed(() => props.slideImageItems ?? []);

const firstSlideName = computed(() => props.slideImageItems[0].slideName ?? "");

const slide = ref(firstSlideName.value);
const lorem = ref<string>(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);
</script>

<style scoped></style>
