<template>
  <q-btn
    :label="label"
    :dense="dense"
    :color="color"
    :text-color="textColor"
    no-caps
    stretch
    flat
    class="q-pa-md"
    size="md"
  >
  </q-btn>
</template>
<script setup lang="ts">
/**
 * Komponente, die das Systembutton relaisiert.
 * @link props sind die Eigenschaften dieser Komponente.
 */
import { defineProps } from "vue";

/**
 * type safe props declaration
 */
const props = defineProps<{
  label: string;
  dense: boolean;
  color: string;
  textColor?: string;
}>();
</script>

<style scoped></style>
