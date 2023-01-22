<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-secondary">
      <q-toolbar>
        <smart-view-btn
          text-color="white"
          dense
          label="Aleppo city"
          color="primary"
          @click="navigate('Home')"
        ></smart-view-btn>
        <q-space />
        <smart-view-btn
          text-color="white"
          dense
          label="Gallery"
          color="primary"
          @click="navigate('Gallery')"
        ></smart-view-btn>
        <smart-view-btn
          text-color="white"
          dense
          label="Contact us"
          color="primary"
          @click="navigate('ContactUs')"
        ></smart-view-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SmartViewBtn from "../src/components/SmartViewBtn.vue";

const router = useRouter();

const navigate = (name: string) => {
  router.push({
    name: name,
  });
};
</script>
<style lang="css"></style>
