<template>
  <div class="text-gray-800">
    <h1 class="text-3xl font-bold text-indigo-700 mb-4">Вход в систему </h1>

    <div class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <form class="flex flex-col gap-4">
        <div>
          <label class="block text-gray-600 mb-1">Логин</label>
          <input type="text" placeholder="Введите логин" class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>

        <div>
          <label class="block text-gray-600 mb-1">Пароль</label>
          <input type="password" placeholder="Введите пароль" class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>

        <button
          type="submit"
          class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 mt-2 transition-colors"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>
