<template xmlns="http://www.w3.org/1999/html">
  <section class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 class="text-6xl font-bold text-gray-900">Welcome to My Portfolio</h1>

      <p class="mt-6 text-xl text-gray-600 max-w-2xl">
        I’m a developer focused on building data-driven and visually engaging web applications.
        <br>Base in Milan
      </p>

      <NuxtLink
          to="/projects"
          class="mt-10 px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-all"
      >
        View My Work
      </NuxtLink>
    </div>

    <!-- Featured Projects -->
    <div class="py-24 px-12 bg-gray-50">
      <h2 class="text-4xl font-semibold mb-12 text-gray-800">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 bg-white shadow hover:shadow-lg transition-all rounded">
          <h3 class="text-2xl font-semibold mb-4">Marine Traffic Monitor</h3>
          <p class="text-gray-600">
            Real-time traffic flow visualization platform built with Spring Boot, Flink, and ECharts.
          </p>
        </div>

        <div class="p-6 bg-white shadow hover:shadow-lg transition-all rounded">
          <h3 class="text-2xl font-semibold mb-4">Lombardy Weather Dashboard</h3>
          <p class="text-gray-600">
            Nuxt.js + PostGIS platform providing live meteorological data and spatial analytics.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>