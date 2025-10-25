<template>
  <div class="bg-gray-100 rounded-[20px] p-5 flex items-start gap-5">
    <img :src="agent.avatarUrl" :alt="agent.name" class="w-[140px] h-[140px] rounded-2xl object-cover flex-shrink-0">
    <div class="flex-1 flex flex-col gap-2">
      <h2 class="text-2xl font-bold text-content">{{ agent.name }}</h2>
      <EntityStats
          :is-verified="agent.isVerified"
          :rating="agent.rating"
          :reviews="agent.reviews"
      />
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
