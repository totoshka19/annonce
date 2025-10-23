<template>
  <button
      :class="[
      'flex items-center bg-gray-200/70 hover:bg-gray-300/70 rounded-full text-gray-700 transition-colors',
      paddingClass,
      spaceClass
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  paddingClass: {
    type: String,
    default: 'px-4 py-2'
  },
  spaceClass: {
    type: String,
    default: 'space-x-2'
  }
})
</script>
