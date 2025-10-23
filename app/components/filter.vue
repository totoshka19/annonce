<template>
  <div class="w-full max-w-[438px] mx-auto">
    <UiSelect
        v-model="selectedService"
        :options="serviceOptions"
        placeholder="Выберите категорию"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const selectedService = ref('all');

const serviceOptions = [
  { type: 'option', label: 'Все товары и услуги', value: 'all' },
  { type: 'header', label: 'Категория 1' },
  { type: 'option', label: 'Гробы', value: 'coffins', count: 5 },
  { type: 'option', label: 'Урны', value: 'urns', count: 12 },
  { type: 'header', label: 'Категория 2' },
  { type: 'option', label: 'Тапки', value: 'slippers', count: 2 },
  { type: 'option', label: 'Покрывало', value: 'blankets', count: 1 },
];

const emit = defineEmits(['change']);

watch(selectedService, (newValue) => {
  emit('change', newValue);
});
</script>
