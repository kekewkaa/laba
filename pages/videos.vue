<template>
  <div class="text-gray-800 text-center">
    <h1 class="text-3xl font-bold text-indigo-700 mb-4">Игра с Барсиком </h1>
    <p class="mb-4 text-lg">Кликай по кружку как можно быстрее за 10 секунд! </p>

    <div class="flex justify-center mb-6">
      <button
        class="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        @click="startGame"
        v-if="!gameActive"
      >
        Начать игру
      </button>
    </div>

    <div v-if="gameActive" class="flex flex-col items-center">
      <div
        class="relative w-40 h-40 bg-indigo-500 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform select-none"
        @click="clickCircle"
      >
        <!-- Всплывающая анимация -->
        <transition-group name="pop" tag="div">
          <img
            v-for="(anim, i) in animations"
            :key="anim.id"
            src="/images/barsik_head.png"
            class="absolute w-16 h-16 object-cover"
            :style="{ top: anim.y + 'px', left: anim.x + 'px' }"
          />
        </transition-group>
      </div>

      <p class="mt-6 text-xl text-indigo-700 font-semibold">Очки: {{ score }}</p>
      <p class="text-lg text-gray-600">Осталось времени: {{ timeLeft }} сек.</p>
    </div>

    <div v-else-if="gameOver" class="text-center">
      <h2 class="text-2xl font-bold text-indigo-700 mb-2">Игра окончена </h2>
      <p class="text-lg mb-4">Твой результат: <strong>{{ score }}</strong> кликов!</p>
      <p class="text-lg text-indigo-600 font-semibold mb-4">Рекорд: {{ record }}</p>
      <button
        class="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        @click="startGame"
      >
        Играть снова
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const gameActive = ref(false)
const gameOver = ref(false)
const score = ref(0)
const record = ref(localStorage.getItem("barsik_record") || 0)
const timeLeft = ref(10)
const animations = ref([])

let timer

// Запуск игры
function startGame() {
  score.value = 0
  timeLeft.value = 10
  gameActive.value = true
  gameOver.value = false

  timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) endGame()
  }, 1000)
}

// Конец игры
function endGame() {
  clearInterval(timer)
  gameActive.value = false
  gameOver.value = true
  if (score.value > record.value) {
    record.value = score.value
    localStorage.setItem("barsik_record", record.value)
  }
}

// Клик по кружку
function clickCircle(event) {
  score.value++
  createAnimation(event)
}

// Мини-анимация “Барсик”
function createAnimation(event) {
  const rect = event.target.getBoundingClientRect()
  const id = Date.now()
  const x = Math.random() * 80 + 30
  const y = Math.random() * 80 + 30
  animations.value.push({ id, x, y })
  setTimeout(() => {
    animations.value = animations.value.filter((a) => a.id !== id)
  }, 400)
}
</script>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.4s ease-out;
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.3);
}
.pop-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
