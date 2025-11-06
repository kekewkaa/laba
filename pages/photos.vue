<template>
  <div>
    <h1 class="text-3xl font-bold text-indigo-700 mb-6">Фото Барсика 🐱</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
      >
        <img :src="photo.src" :alt="photo.alt" class="w-full h-60 object-cover" />
        <div class="p-3 text-center text-gray-700">{{ photo.alt }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const photos = [
  { src: '/images/barsik1.jpg', alt: 'Барсик крупным планом' },
  { src: '/images/barsik2.jpg', alt: 'Барсик подозревает' },
  { src: '/images/barsik3.jpg', alt: 'Барсик слушает музыку' },
  { src: '/images/barsik4.jpg', alt: 'Барсик греется' },
  { src: '/images/barsik5.jpg', alt: 'Барсик сидит' },
  { src: '/images/barsik6.jpg', alt: 'Барсик на стуле' },
  { src: '/images/barsik7.jpg', alt: 'Барсик лежит' },
  { src: '/images/barsik8.jpg', alt: 'Барсик рычит' },
  { src: '/images/barsik9.jpg', alt: 'Барсик в тазике ' },
  { src: '/images/barsik10.jpg', alt: 'Барсик в диване' },
]
</script>
