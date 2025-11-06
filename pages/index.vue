<template>
  <div class="text-gray-800">
    <h1 class="text-4xl font-bold text-indigo-700 mb-6">Барсик — наш пушистый друг 🐾</h1>

    <div class="flex flex-col md:flex-row gap-6 items-center">
      <img src="/images/barsik1.jpg" alt="Барсик" class="w-72 h-72 rounded-2xl shadow-lg object-cover" />
      <p class="text-lg leading-relaxed">
        Барсик — наш черно-белый пушистый кот, живёт с нами уже <strong>15 лет</strong>.  
        Он очень ласковый, умный и любит, когда его гладят за ушком.  
        Барсик — член нашей семьи, друг и любимец всех, кто его встречает!
      </p>
    </div>

    <h2 class="text-2xl font-semibold text-indigo-700 mt-10 mb-4">Фото Барсика 📸</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <img v-for="n in 3" :key="n" :src="`/images/barsik${n + 1}.jpg`" class="rounded-xl shadow-md hover:scale-105 transition-transform" />
    </div>
  </div>
</template>
