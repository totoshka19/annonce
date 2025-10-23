<template>
  <footer class="bg-gray-100 border-t border-gray-200 mt-auto text-sm">
    <div class="container mx-auto px-4 py-4 flex items-center space-x-6 text-gray-600">
      <div>
        &copy; Annonce {{ currentYear }}
      </div>
      <nav class="flex items-center space-x-6">
        <a href="#" class="hover:underline">Документы</a>
        <a href="#" class="hover:underline">О компании</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped></style>
