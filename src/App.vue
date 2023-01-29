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
          label="About us"
          color="primary"
          @click="navigate('ContactUs')"
        ></smart-view-btn>
      </q-toolbar>
    </q-header>
    <q-footer reveal elevated class="bg-secondary">
      <q-toolbar reveal elevated class="bg-secondary">
        <span class="text-body2"> Abdulkader Alaref </span>
        <q-space />
        <q-btn
          rounded
          flat
          dense
          no-caps
          icon="img:facebook.svg"
          @click="gotToFacebook"
        />
        <q-btn
          rounded
          flat
          dense
          no-caps
          icon="img:instagram.svg"
          @click="goToInsta"
        />
      </q-toolbar>
    </q-footer>
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

function gotToFacebook() {
  window.open("https://www.facebook.com/abdalkader.alaref");
}
function goToInsta() {
  window.open("https://www.instagram.com/abdulkader.m.alaref/");
}
</script>
<style lang="css"></style>
