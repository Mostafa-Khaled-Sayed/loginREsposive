<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style>
*{
  font-family: "Noto Sans Arabic";
  font-family: "Plus Jakarta Sans";

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html[dir="rtl"] {
  font-family: "Noto Sans Arabic";

  direction: rtl;
  text-align: right;
}

html[dir="ltr"] {
  direction: ltr;
  text-align: left;
}

</style>