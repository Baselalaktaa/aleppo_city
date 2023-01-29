<template>
  <div class="q-pa-md">
    <div class="row q-gutter-lg justify-center">
      <div class="col-4">
        <span class="text-h4"> ABULD SCHREIBE HIER TEXT Lorem ipsum </span>
      </div>
      <div class="col-4">
        <q-card class="my-video-card shadow-10">
          <q-video
            style="height: 100%"
            src="https://www.youtube.com/embed/xPKcqRFajU4"
          />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.my-video-card {
  width: 100%;
  height: 60vh;
}
</style>
