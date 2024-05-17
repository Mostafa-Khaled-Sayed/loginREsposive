<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <RouterView />
</template>

<style>
*{
  font-family: "Plus Jakarta Sans";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

html[dir="ltr"] {
  direction: ltr;
  text-align: left;
}

</style>