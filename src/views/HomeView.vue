<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to the dashboard!</p>
    <v-btn @click="logout" color="red">Logout</v-btn>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const logout = () => {
  store.dispatch('logout');
  router.push('/login');
};
</script>
