<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <main class="p-4">
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
// Import Header component
import Header from './components/Header.vue';
</script>

<style scoped>
/* Global styling can be applied here if necessary */
</style>
