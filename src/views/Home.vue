<template>
  <q-page class="q-mx-auto">
    <div class="column">
      <div class="row q-ma-lg q-gutter-x-xl justify-center">
        <div class="col-4">
          <p class="text-h2">Hallo, hier ist Smart view.</p>
          <p class="text-body1">
            Besser lernen in den Themen OOP (Java), Datenbanken und full-stack
            Web-Applikationen. Wir sind hoch gebildete Informatiker mit einer
            langen praktischen Erfahrung in der Industrie.
            <br />
            Mit uns wird dein Wissen in den Basisthemen der Informatik vertieft.
            <br />
            Dazu kannst du auch mit uns lernen, wie man mit den Best-Practices
            aus den feinsten IT-Consulting Firmen eine Webapplikation bilden
            kann, um deine Services bzw. Proukte schnell ans Markt zu bringen.
          </p>
        </div>
        <div class="col-4">
          <q-img src="../assets/1974.jpg" height="80%" />
        </div>
      </div>
      <div class="row q-ma-lg q-gutter-x-xl justify-center">
        <div class="col-4">
          <q-img src="../assets/aleppocas.jpg" height="80%" />
        </div>
        <div class="col-4">
          <p class="text-h3">Unsere Werte, unser Ziel.</p>
          <p class="text-body1">
            Alles in allem hoffen wir, dass unsere Kurse euch beim Einstieg in
            die Informatik weiterhilft! Das Lernprinzip von Smart view Team
            lautet „learning by doing“.
            <br />
            Wir möchten auch Ihnen ans Herz legen, sich beim Erlernen von Java
            an dieses Prinzip zu halten, denn nur, indem Sie Ihre gewonnenen
            Kenntnisse anwenden, können Sie vertrauter mit der Programmierung
            werden.
            <br />
            Sie werden am Anfang Fehler machen und das ist auch gut so. Dafür
            sind wir auch da, euch an die richtige Richtung zu orientieren.
            <br />
            Unter
            <!--            -->
            <q-btn class="q-pa-xs" flat no-caps>
              <span
                @click="goToCourses()"
                class="text-body1 text-deep-orange-13"
              >
                Kurse
              </span>
            </q-btn>
            kannst du dich für angebotenen Themen an den geplanten Terminen
            anmleden.
            <br />
            Bei Fragen fühl dich bitte frei unser
            <q-btn class="q-pa-xs" flat no-caps>
              <span
                @click="goToContact()"
                class="text-body1 text-deep-orange-13"
              >
                Contact-Formular
              </span>
            </q-btn>
            zu verwenden.
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
