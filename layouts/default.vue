<template>
  <div>
    <!-- ШАПКА -->
    <header
      class="flex flex-col md:flex-row items-center md:justify-between w-full bg-indigo-700 text-white px-6 py-4 shadow-lg relative"
    >
      <!-- Логотип -->
      <div class="flex items-center gap-3 mb-3 md:mb-0">
        <!-- логотип остаётся logo.png -->
        <img
          src="/images/logo.png"
          class="w-16 h-16 rounded-full border-2 border-white shadow-sm"
          alt="Logo"
        />
        <div class="flex flex-col">
          <span class="text-2xl font-extrabold tracking-wide">Amira Project</span>
          <span class="text-sm text-indigo-200 italic">сайт о Барсике 🐾</span>
        </div>
      </div>

      <!-- Навигация (десктоп) -->
      <nav class="hidden md:flex flex-row items-center gap-4 relative z-50">
        <NuxtLink
          to="/"
          class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors"
          >Главная</NuxtLink
        >

        <!-- Галерея -->
        <div class="relative">
          <button
            @click="toggleLabsDesktop"
            class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors flex items-center gap-1"
          >
            Фото и Видео
            <span v-if="labsDesktopOpen">▾</span>
            <span v-else>▸</span>
          </button>

          <transition name="slide-fade">
            <div
              v-if="labsDesktopOpen"
              class="absolute bg-white text-gray-800 mt-2 rounded shadow-lg w-40 z-50"
            >
              <NuxtLink to="/photos" class="block px-4 py-2 hover:bg-gray-100"
                >Фото Барсика</NuxtLink
              >
              <NuxtLink to="/videos" class="block px-4 py-2 hover:bg-gray-100"
                >Игра с Барсиком</NuxtLink
              >
            </div>
          </transition>
        </div>

        <NuxtLink
          to="/login"
          class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors"
          >LogIn</NuxtLink
        >
        <NuxtLink
          to="/logout"
          class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors"
          >LogOut</NuxtLink
        >
      </nav>

      <!-- Кнопка бургер (мобилка) -->
      <button @click="toggleBurger" class="md:hidden p-2 bg-indigo-600 rounded">
        <span v-if="!burger">☰</span>
        <span v-else>✖️</span>
      </button>
    </header>

    <!-- Мобильное меню -->
    <transition name="slide-fade">
      <nav
        v-if="burger"
        class="md:hidden flex flex-col bg-indigo-600 text-white"
      >
        <NuxtLink
          to="/"
          class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500"
          >Главная</NuxtLink
        >

        <!-- Подменю Фото и Видео -->
        <button
          @click="toggleLabs"
          class="flex justify-between items-center px-4 py-3 border-t border-indigo-500"
        >
          <span>Фото и Видео</span>
          <span v-if="labsOpen">▾</span>
          <span v-else>▸</span>
        </button>

        <div v-if="labsOpen" class="flex flex-col bg-indigo-700">
          <NuxtLink
            to="/photos"
            class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500"
            >Фото Барсика</NuxtLink
          >
          <!-- Вместо Видео и Аудио добавлены "О Барсике" и "Контакты" -->
          <NuxtLink
            to="/about"
            class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500"
            >О Барсике</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500"
            >Контакты</NuxtLink
          >
        </div>

        <NuxtLink
          to="/login"
          class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500"
          >LogIn</NuxtLink
        >
        <NuxtLink
          to="/logout"
          class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500"
          >LogOut</NuxtLink
        >
      </nav>
    </transition>

    <!-- Контент -->
    <main class="p-6 max-w-5xl mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const burger = ref(false)
const labsOpen = ref(false)
const labsDesktopOpen = ref(false)

function toggleBurger() {
  burger.value = !burger.value
  if (!burger.value) labsOpen.value = false
}

function toggleLabs() {
  labsOpen.value = !labsOpen.value
}

function toggleLabsDesktop() {
  labsDesktopOpen.value = !labsDesktopOpen.value
}

function handleClickOutside(event) {
  const dropdown = document.querySelector(".relative")
  if (dropdown && !dropdown.contains(event.target)) {
    labsDesktopOpen.value = false
  }
}

onMounted(() => document.addEventListener("click", handleClickOutside))
onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside))
</script>

<style scoped>
a:hover {
  cursor: pointer;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
