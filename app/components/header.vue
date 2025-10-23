<template>
  <header class="bg-[#FAF6F0] shadow-sm">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-6">
        <a href="/" class="text-3xl font-serif font-bold text-gray-800">Annoncé</a>
        <UiButton>
          <IconsCatalog class="w-5 h-5" />
          <span>Все категории</span>
        </UiButton>
      </div>
      <div class="flex items-center space-x-6">
        <a href="#" class="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
          <IconsMapPin class="w-4 h-4" />
          <span>Ростов-на-Дону</span>
        </a>
        <div class="border-l border-gray-300 h-6"></div>
        <a href="#" class="text-primary hover:underline">Разместить объявление</a>
        <UiButton
            padding-class="pl-3 pr-2 py-1.5"
            space-class="space-x-3"
        >
          <IconsMenu class="w-5 h-5" />
          <img class="w-8 h-8 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Аватар пользователя">
        </UiButton>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
