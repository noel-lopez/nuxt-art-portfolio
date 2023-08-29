<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
    <LegoPreview v-for="i in 39" :key="i" class="transition-transform ease-in-out duration-200 outline-none mb-4">
      <LegoPreviewDialog
        class="fixed z-800 left-0 top-0 w-screen h-screen bg-white bg-opacity-50"
      />
      <NuxtImg :src="`/images/${i}.jpeg`" :alt="`image ${i}`" class="rounded-lg h-auto max-w-full" placeholder loading="lazy" sizes="sm:400px md:50vw lg:100vw" />
    </LegoPreview>
  </div>
</template>
