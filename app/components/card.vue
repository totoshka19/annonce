<template>
  <div class="flex flex-col h-full">
    <div class="relative">
      <img :src="item.imageUrl" :alt="item.title" class="w-full h-49 object-cover rounded-2xl overflow-hidden">
      <div v-if="item.status !== 'hidden'" class="absolute top-2 left-2 flex items-center gap-2">
        <div class="flex items-center gap-1.5 bg-black/50 text-white text-sm rounded-full px-2.5 py-1">
          <IconsEye class="w-4 h-4" />
          <span>{{ item.views }}</span>
        </div>
        <div class="flex items-center gap-1.5 bg-black/50 text-white text-sm rounded-full px-2.5 py-1">
          <IconsCalendar class="w-3.5 h-3.5" />
          <span>{{ item.date }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-grow mt-2">
      <div>
        <p class="text-xl text-content mb-1">{{ item.price }}</p>
        <p class="text-content mb-1">{{ item.title }}</p>
      </div>
      <div class="mt-auto border-t border-gray-200 pt-2 mt-2">
        <div v-if="item.status === 'active'" class="flex items-center justify-between text-gray-500">
          <span>Увеличьте количество просмотров</span>
          <UiButton variant="promote">
            Продвигать
          </UiButton>
        </div>
        <div v-else-if="item.status === 'promoted'" class="text-primary text-center flex items-center justify-center h-10">
          Объявление продвигается
        </div>
        <div v-else-if="item.status === 'hidden'" class="text-red-500 text-center flex items-center justify-center h-10">
          Объявление скрыто
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(price);
};
</script>
