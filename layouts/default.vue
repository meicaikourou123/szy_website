<template>
  <div>
    <Navbar />
    <main class="px-8 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
</script>

<style scoped>
html, body, #__nuxt, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
main {
  min-height: 100vh;
  background-color: #f9fafb;
}
</style>