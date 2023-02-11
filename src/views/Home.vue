<template>
  <q-page class="q-mx-auto">
    <div class="column">
      <div class="row q-ma-lg q-gutter-x-xl justify-center">
        <div class="col-4">
          <p class="text-h2">Aleppo. 2</p>
          <p class="text-body1">
            Aleppo is a city in Syria, which serves as the capital of the Aleppo
            Governorate, the most populous Governorate of Syria. With an
            estimated population of 2,098,000 residents as of 2021, it is
            Syria's second-largest city and also one of the largest cities in
            the Levant region.
            <br />
            Aleppo is one of the oldest continuously inhabited cities in the
            world; Such a long history is attributed to its strategic location
            as a trading center between the Mediterranean Sea and Mesopotamia.
            <br />
            For centuries, Aleppo was the largest city in the Syrian region. The
            city's significance in history has been its location at one end of
            the Silk Road, which passed through Central Asia and Mesopotamia. It
            won the title of the Islamic Capital of Culture 2006.
          </p>
        </div>
        <div class="col-4">
          <q-img src="../assets/aleppoone.png" height="100%" />
        </div>
      </div>
      <div class="row q-ma-lg q-gutter-x-xl justify-center">
        <div class="col-4">
          <q-img src="../assets/aleppocas.jpg" height="100%" />
        </div>
        <div class="col-4">
          <p class="text-h2">Citadel of Aleppo.</p>
          <p class="text-body1">
            The Citadel of Aleppo is a large medieval fortified palace in the
            centre of the old city of Aleppo, northern Syria. It is considered
            to be one of the oldest and largest castles in the world.
            <br />
            Usage of the Citadel hill dates back at least to the middle of the
            3rd millennium BC. Occupied by many civilizations over time –
            including the Armenians, Greeks, Byzantines, Ayyubids, Mamluks and
            Ottomans – the majority of the construction as it stands today is
            thought to originate from the Ayyubid period.
            <br />
            An extensive conservation work took place in the 2000s by the Aga
            Khan Trust for Culture, in collaboration with Aleppo Archeological
            Society. Dominating the city, the Citadel is part of the Ancient
            City of Aleppo, an UNESCO World Heritage Site since 1986.
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToCourses() {
  router.push({
    name: "Courses",
  });
}

function goToContact() {
  router.push({
    name: "ContactUs",
  });
}
</script>

<style scoped>
.home {
  font-family: "Apercu", sans-serif;
  font-size: 52px;
  line-height: 60px;
  text-align: center;
  margin-top: 15%;
  color: #fff;
  margin-bottom: 0;
}
</style>
