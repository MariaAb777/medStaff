<template>
    <header class="bg-blue-500 text-white p-4">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/doctors" class="hover:underline">Врачи</router-link>
          </li>
          <li>
            <router-link to="/nurses" class="hover:underline">Медсестры</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  // No specific logic is needed for this component
  </script>
  
  <style scoped>
  /* You can add any custom styles here */
  </style>
  