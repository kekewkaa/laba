<template>
  <div>
    <h1 class="text-3xl font-bold text-indigo-700 mb-6">Голос Барсика 🎶</h1>

    <div class="space-y-6">
      <div v-for="(sound, index) in sounds" :key="index" class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-indigo-700">{{ sound.title }}</h2>
        <audio :src="sound.src" controls class="w-full mt-2"></audio>
      </div>
    </div>
  </div>
</template>

<script setup>
const sounds = [
  { src: '/audio/meow1.mp3', title: 'Барсик говорит “мяу”' },
  { src: '/audio/purr1.mp3', title: 'Барсик мурлычет' },
]
</script>
