<template>
  <q-carousel
    v-model="slide"
    transition-prev="fade"
    transition-next="fade"
    swipeable
    animated
    padding
    arrows
    class="bg-blue-1 text-white shadow-1 rounded-borders my-gallery-card"
    :fullscreen="triggerFullscreen"
  >
    <q-carousel-slide name="1" class="column no-wrap flex-center">
      <q-video
        class="absolute-full"
        src= "https://www.youtube.com/embed/xPKcqRFajU4"
      />
    </q-carousel-slide>
    <q-carousel-slide name="2" class="column no-wrap flex-center">
      <q-video
        class="absolute-full"
        src= "https://www.youtube.com/embed/w9IGyFxLX5Y"
      />
    </q-carousel-slide>
    <q-carousel-slide name="3" class="column no-wrap flex-center">
      <q-video
        class="absolute-full"
        src= "https://www.youtube.com/embed/g5XFzv5PkRY"
      />
    </q-carousel-slide>
  </q-carousel>
  <div class="row justify-center">
    <q-btn-toggle
      dense
      no-caps
      rounded
      v-model="slide"
      :options="[
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const triggerFullscreen = ref<boolean>(false);

function triggerFullscreenFun() {
  triggerFullscreen.value = !triggerFullscreen.value;
}

const slide = ref("1");
</script>

<style scoped>
.my-gallery-card {
  width: 100%;
  height: 83vh;
}
</style>
