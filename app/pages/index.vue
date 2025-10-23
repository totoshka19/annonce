<template>
  <div class="container mx-auto">
    <div class="my-8 border-b border-gray-200"></div>
    <Filter @change="handleFilterChange" />
  </div>
</template>

<script setup>
const handleFilterChange = (selectedValue) => {
  console.log('На странице было выбрано новое значение:', selectedValue);
};
</script>
