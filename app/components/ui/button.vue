<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  active: {
    type: Boolean,
    default: false
  }
})

const buttonClasses = computed(() => {
  const baseClasses = 'flex items-center justify-center transition-colors';
  const tabBase = 'font-medium gap-1 h-10 px-3 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-content';
  const tabActive = 'border border-content';

  const variants = {
    default: 'font-medium space-x-2 bg-gray-200/70 hover:bg-gray-300/70 px-4 py-2 rounded-full text-gray-700',
    tab: `${tabBase} ${props.active ? tabActive : ''}`,
    primary: 'font-semibold bg-primary hover:bg-primary-dark text-white rounded-xl h-14 py-4 px-5'
  };

  return `${baseClasses} ${variants[props.variant] || variants.default}`;
})
</script>
