<template>
  <div>
    <!-- Шапка -->
    <header class="flex flex-col md:flex-row items-center md:justify-between w-full bg-indigo-700 text-white px-6 py-4 shadow-lg relative">
      <!-- Логотип -->
      <div class="flex items-center gap-3 mb-3 md:mb-0">
        <img src="/images/logo.png" class="w-16 h-16 rounded-full border-2 border-white shadow-sm" alt="Logo" />
        <span class="text-2xl font-extrabold tracking-wide">Amira Project</span>
      </div>

      <!-- Навигация (десктоп) -->
      <nav class="hidden md:flex flex-row items-center gap-4 relative z-50">
        <NuxtLink to="/" class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors">Home</NuxtLink>

        <!-- Меню Labs (теперь открывается по клику) -->
        <div class="relative">
          <button @click="toggleLabsDesktop" class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors flex items-center gap-1">
            Labs
            <span v-if="labsDesktopOpen">▾</span>
            <span v-else>▸</span>
          </button>

          <!-- Подменю -->
          <transition name="slide-fade">
            <div
              v-if="labsDesktopOpen"
              class="absolute bg-white text-gray-800 mt-2 rounded shadow-lg w-32 z-50"
            >
              <NuxtLink to="/lab1" class="block px-4 py-2 hover:bg-gray-100">Lab1</NuxtLink>
              <NuxtLink to="/lab2" class="block px-4 py-2 hover:bg-gray-100">Lab2</NuxtLink>
              <NuxtLink to="/lab3" class="block px-4 py-2 hover:bg-gray-100">Lab3</NuxtLink>
              <NuxtLink to="/lab4" class="block px-4 py-2 hover:bg-gray-100">Lab4</NuxtLink>
            </div>
          </transition>
        </div>

        <NuxtLink to="/login" class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="px-3 py-2 rounded hover:bg-indigo-500 transition-colors">LogOut</NuxtLink>
      </nav>

      <!-- Кнопка-бургер (мобилка) -->
      <button @click="toggleBurger" class="md:hidden p-2 bg-indigo-600 rounded">
        <span v-if="!burger">☰</span>
        <span v-else>✖</span>
      </button>
    </header>

    <!-- Мобильное меню -->
    <transition name="slide-fade">
      <nav v-if="burger" class="md:hidden flex flex-col bg-indigo-600 text-white">
        <NuxtLink to="/" class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500">Home</NuxtLink>

        <button @click="toggleLabs" class="flex justify-between items-center px-4 py-3 border-t border-indigo-500">
          <span>Labs</span>
          <span v-if="labsOpen">▾</span>
          <span v-else>▸</span>
        </button>

        <div v-if="labsOpen" class="flex flex-col bg-indigo-700">
          <NuxtLink to="/lab1" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab1</NuxtLink>
          <NuxtLink to="/lab2" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab2</NuxtLink>
          <NuxtLink to="/lab3" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab3</NuxtLink>
          <NuxtLink to="/lab4" class="px-6 py-2 border-t border-indigo-500 hover:bg-indigo-500">Lab4</NuxtLink>
        </div>

        <NuxtLink to="/login" class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="px-4 py-3 border-t border-indigo-500 hover:bg-indigo-500">LogOut</NuxtLink>
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

// бургер меню
function toggleBurger() {
  burger.value = !burger.value
  if (!burger.value) labsOpen.value = false
}

// мобильное подменю Labs
function toggleLabs() {
  labsOpen.value = !labsOpen.value
}

// десктопное подменю Labs
function toggleLabsDesktop() {
  labsDesktopOpen.value = !labsDesktopOpen.value
}

// клик вне меню — закрывает его
function handleClickOutside(event) {
  const dropdown = document.querySelector(".relative")
  if (dropdown && !dropdown.contains(event.target)) {
    labsDesktopOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})
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
