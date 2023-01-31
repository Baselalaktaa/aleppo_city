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
        src="https://www.youtube.com/embed/w9IGyFxLX5Y"
      />
    </q-carousel-slide>
    <q-carousel-slide name="2" class="column no-wrap flex-center">
      <q-video
        class="absolute-full"
        src="https://www.youtube.com/embed/w9IGyFxLX5Y"
      />
    </q-carousel-slide>
    <q-carousel-slide name="3" class="column no-wrap flex-center">
      <q-video
        class="absolute-full"
        src="https://www.youtube.com/embed/w9IGyFxLX5Y"
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
        { label: 'Soft Jazz', value: '1' },
        { label: 'Rihanna', value: '2' },
        { label: 'Ibiza Mix', value: '3' },
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
  height: 100vh;
}
</style>
