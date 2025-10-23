<template>
  <div class="relative w-full" ref="selectContainer">
    <button
        @click="toggleDropdown"
        class="w-full h-[56px] bg-gray-200 box-border border border-gray-200 rounded-xl px-4 text-left flex items-center justify-between transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
    >
      <span :class="{ 'text-gray-500': !selectedLabel }">
        {{ selectedLabel || placeholder }}
      </span>
      <IconsChevronDown
          class="w-5 h-5 text-gray-600 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <ul
          v-if="isOpen"
          class="absolute z-10 mt-2 w-full bg-white shadow-lg border border-black/8 rounded-xl p-2 text-base overflow-auto focus:outline-none"
          role="listbox"
      >
        <template v-for="item in options" :key="item.label">
          <li
              v-if="item.type === 'header'"
              class="px-3 pt-4 pb-2 text-gray-400 select-none"
              role="presentation"
          >
            {{ item.label }}
          </li>

          <li
              v-else-if="item.type === 'option'"
              @click="selectOption(item)"
              class="cursor-pointer select-none relative py-2.5 px-3 flex items-center justify-between text-gray-900 hover:bg-gray-100 rounded-lg"
              role="option"
              :aria-selected="item.value === modelValue"
          >
            <div class="flex items-baseline gap-2">
              <span class="block truncate">{{ item.label }}</span>
              <span v-if="item.count != null" class=" text-gray-500">{{ item.count }}</span>
            </div>

            <span v-if="item.value === modelValue" class="text-primary">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </li>
        </template>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: [String, Number, null],
  options: Array,
  placeholder: String
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectContainer = ref(null);

const selectedLabel = computed(() => {
  const selectedOption = props.options.find(
      (item) => item.type === 'option' && item.value === props.modelValue
  );
  return selectedOption ? selectedOption.label : null;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  emit('update:modelValue', option.value);
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (selectContainer.value && !selectContainer.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
