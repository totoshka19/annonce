<template>
  <div class="bg-gray-100 rounded-[20px] p-5 flex items-start gap-5">
    <img :src="agent.avatarUrl" :alt="agent.name" class="w-[140px] h-[140px] rounded-2xl object-cover flex-shrink-0">
    <div class="flex-1 flex flex-col gap-2">
      <h2 class="text-2xl font-bold text-content">{{ agent.name }}</h2>
      <div class="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm">
        <span v-if="agent.isVerified" class="flex items-center">
          <IconsVerified class="w-4 h-4 text-primary mr-1.5" />
          Документы проверены
        </span>
        <template v-if="agent.rating">
          <span v-if="agent.isVerified">&bull;</span>
          <span class="flex items-center">
            <IconsStar class="w-4 h-4 text-primary mr-1" />
            {{ agent.rating }}
          </span>
          <span>&bull;</span>
          <span>{{ agent.reviews }} отзывов</span>
        </template>
        <template v-else-if="agent.isVerified">
          <span>&bull;</span>
          <span>Нет отзывов</span>
        </template>
      </div>
      <p>{{ agent.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  agent: {
    type: Object,
    required: true
  }
});
</script>
