<template>
  <div class="flex items-center flex-wrap gap-x-3 gap-y-1 text-content text-sm">
    <span v-if="isVerified" class="flex items-center">
      <IconsVerified class="w-4 h-4 text-primary mr-1.5" />
      Документы проверены
    </span>
    <template v-if="rating">
      <span v-if="isVerified">&bull;</span>
      <span class="flex items-center">
        <IconsStar class="w-4 h-4 text-primary mr-1" />
        {{ rating }}
      </span>
      <span>&bull;</span>
      <span>{{ reviews }} отзывов</span>
    </template>
    <template v-else>
      <span>&bull;</span>
      <span>Нет отзывов</span>
    </template>
  </div>
</template>

<script setup>
defineProps({
  isVerified: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: null,
  },
  reviews: {
    type: Number,
    default: null,
  },
});
</script>
