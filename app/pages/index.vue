<template>
  <div>
    <div class="my-8 border-b border-gray-200"></div>
    <div class="container mx-auto px-4">
      <Filter @change="handleFilterChange" />
      <div class="my-8">
        <CardList :items="filteredItems" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const mockItems = [
  { id: 1, title: 'Clavia Nord Grand сценическое цифровое пианино', price: '450 500 ₽', imageUrl: '/images/piano.jpg', views: 750, date: '2 дня', status: 'promoted', category: 'musical' },
  { id: 2, title: 'Hyundai Sonata 2.0 AT, 2023, 30 км', price: '3 285 000 ₽', imageUrl: '/images/car.jpg', views: 255, date: '4 дня', status: 'active', category: 'auto' },
  { id: 3, title: '2-к. квартира, 46 м², 1/5 эт.', price: '4 800 000 ₽', imageUrl: '/images/flat.jpg', views: 255, date: '2 дня', status: 'active', category: 'realty' },
  { id: 4, title: 'Старые барабаны', price: '7 500 ₽', imageUrl: '/images/drums.jpg', views: 255, date: '2 дня', status: 'active', category: 'musical' },
  { id: 5, title: 'DMX сплиттер RJ45 to 4x XLR Stairville', price: '7 500 ₽', imageUrl: '/images/dmx.jpg', views: 255, date: '2 дня', status: 'active', category: 'equipment' },
  { id: 6, title: 'Мотоцикл honda', price: '217 500 ₽', imageUrl: '/images/moto1.jpg', views: 255, date: '2 дня', status: 'active', category: 'auto' },
  { id: 7, title: 'Иж юпитер 5', price: '17 900 ₽', imageUrl: '/images/moto2.jpg', views: 255, date: '2 дня', status: 'active', category: 'auto' },
  { id: 8, title: 'Пылесос кёрхер с водяным мешком для сбора пыли', price: '7 500 ₽', imageUrl: '/images/vacuum.jpg', views: 255, date: '2 дня', status: 'hidden', category: 'appliances' },
];

const selectedCategory = ref('all');

const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return mockItems;
  }
  return mockItems;
});

const handleFilterChange = (selectedValue) => {
  console.log('На странице выбрана категория:', selectedValue);
  selectedCategory.value = selectedValue;
};
</script>
