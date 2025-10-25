<template>
  <div class="flex flex-col gap-4 max-w-[560px] mx-auto">
    <AgentCard v-for="agent in agents" :key="agent.id" :agent="agent" />
  </div>
</template>

<script setup>
defineProps({
  agents: {
    type: Array,
    required: true
  }
});
</script>
