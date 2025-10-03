<template>
  <div>
    <!-- Шапка -->
    <header class="flex flex-col md:flex-row items-center md:justify-between w-full bg-indigo-700 text-white px-6 py-4 shadow-lg">
      <!-- Логотип -->
      <div class="flex items-center gap-3 mb-3 md:mb-0">
        <img src="/images/logo.png" class="w-16 h-16 rounded-full border-2 border-white shadow-sm" alt="Logo" />
        <span class="text-2xl font-extrabold tracking-wide">Amira Project</span>
      </div>

      <!-- Навигация (десктоп) -->
      <nav class="hidden md:flex flex-row items-center gap-4">
        <NuxtLink to="/" class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors">Home</NuxtLink>

        <!-- Выпадающее меню Labs -->
        <div class="relative group">
          <button class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors">
            Labs
          </button>
          <!-- Подменю -->
          <div class="absolute hidden group-hover:block bg-white text-gray-800 mt-2 rounded shadow-lg w-32">
            <NuxtLink to="/lab1" class="block px-4 py-2 hover:bg-gray-100">Lab1</NuxtLink>
            <NuxtLink to="/lab2" class="block px-4 py-2 hover:bg-gray-100">Lab2</NuxtLink>
            <NuxtLink to="/lab3" class="block px-4 py-2 hover:bg-gray-100">Lab3</NuxtLink>
            <NuxtLink to="/lab4" class="block px-4 py-2 hover:bg-gray-100">Lab4</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/login" class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors">LogOut</NuxtLink>
      </nav>

      <!-- Кнопка-бургер (мобилка) -->
      <button @click="toggleBurger" class="md:hidden p-2 bg-indigo-600 rounded">
        <span v-if="!burger">☰</span> <!-- бургер -->
        <span v-else>✖</span>         <!-- крест -->
      </button>
    </header>

    <!-- Мобильное меню (появляется при клике на бургер) -->
    <transition name="slide-fade">
      <nav v-if="burger" class="md:hidden flex flex-col bg-indigo-600 text-white">
        <NuxtLink @click="closeMenu" to="/" class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500">Home</NuxtLink>

        <!-- Подменю Labs -->
        <button @click="toggleLabs" class="flex justify-between items-center px-4 py-3 border-t border-indigo-500">
          <span>Labs</span>
          <span v-if="labsOpen">▾</span>
          <span v-else>▸</span>
        </button>
        <div v-if="labsOpen" class="flex flex-col bg-indigo-700">
          <NuxtLink @click="closeMenu" to="/lab1" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab1</NuxtLink>
          <NuxtLink @click="closeMenu" to="/lab2" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab2</NuxtLink>
          <NuxtLink @click="closeMenu" to="/lab3" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab3</NuxtLink>
          <NuxtLink @click="closeMenu" to="/lab4" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab4</NuxtLink>
        </div>

        <NuxtLink @click="closeMenu" to="/login" class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500">LogIn</NuxtLink>
        <NuxtLink @click="closeMenu" to="/logout" class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500">LogOut</NuxtLink>
      </nav>
    </transition>

    <!-- Контент страницы -->
    <main class="p-6 max-w-5xl mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue"

const burger = ref(false)
const labsOpen = ref(false)

function toggleBurger() {
  burger.value = !burger.value
  if (!burger.value) labsOpen.value = false
}

function toggleLabs() {
  labsOpen.value = !labsOpen.value
}

function closeMenu() {
  burger.value = false
  labsOpen.value = false
}
</script>

<style scoped>
a:hover {
  cursor: pointer;
}

/* плавное появление/исчезновение меню */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>  