<template>
  <div class="flex flex-col items-center gap-6">
    <div>
      <img src="~/assets/images/logo.png" alt="Логотип компании Наследие" class="w-120 h-120">
    </div>
    <h2 class="text-2xl font-semibold text-content">Наследие</h2>
    <div class="flex items-center space-x-3 text-content text-sm">
      <span class="flex items-center">
        <IconsVerified class="w-4 h-4 text-primary mr-1.5" />
        Документы проверены
      </span>
      <span>&bull;</span>
      <span class="flex items-center">
        <IconsStar class="w-4 h-4 text-primary mr-1" />
        4.7
      </span>
      <span>&bull;</span>
      <span>19 отзывов</span>
    </div>
    <UiButton variant="primary">
      Показать номер телефона
    </UiButton>
    <div class="flex items-center gap-2">
      <UiButton variant="tab" :active="true">Товары и услуги</UiButton>
      <UiButton variant="tab">Агенты 5</UiButton>
      <UiButton variant="tab">О компании</UiButton>
    </div>
  </div>
</template>

<script setup></script>
