<script setup lang="ts">
const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
]
</script>

<template>
  <header class="flex justify-between items-center max-w-7xl mx-auto p-4">
    <NuxtLink to="/" class="font-bold text-xl hover:text-purple-500">
      AR
    </NuxtLink>
    <div class="flex items-center gap-6">
      <NuxtLink v-for="link in links" :key="link.name" :to="link.path" class="font-medium hover:text-purple-500">
        {{ link.name }}
      </NuxtLink>
    </div>
  </header>
</template>
