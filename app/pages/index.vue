<template>
  <div>
    <div class="container mx-auto px-4 pt-8">
      <Suspense>
        <template #default>
          <Profile
              :active-tab="activeTab"
              :agents-count="agentsCount"
              @tab-change="handleTabChange"
          />
        </template>
        <template #fallback>
          <div class="text-center p-10">Загрузка профиля...</div>
        </template>
      </Suspense>
    </div>

    <div class="my-8 border-b border-gray-200"></div>

    <div class="container mx-auto px-4">
      <Filter v-if="activeTab === 'products'" @change="handleFilterChange" />
      <div class="my-8">
        <div v-if="pendingItems" class="text-center">
          Загрузка объявлений...
        </div>
        <div v-else-if="errorItems" class="text-center text-red-500">
          Ошибка при загрузке данных.
        </div>
        <div v-else>
          <CardList v-if="activeTab === 'products'" :items="filteredItems" />
          <div v-if="activeTab === 'agents'">
            <div v-if="pendingAgents" class="text-center">Загрузка агентов...</div>
            <AgentList v-else-if="agentsData" :agents="agentsData" />
          </div>
          <div v-if="activeTab === 'about'">
            <p class="text-center">Здесь будет информация о компании.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeTab = ref('products');
const selectedCategory = ref('all');
const { data: items, pending: pendingItems, error: errorItems } = useFetch('/api/items');
const { data: agentsData, pending: pendingAgents } = useFetch('/api/agents');

const agentsCount = computed(() => {
  return agentsData.value?.length || 0;
});

const filteredItems = computed(() => {
  if (!items.value) return [];
  if (selectedCategory.value === 'all') {
    return items.value;
  }
  return items.value.filter(item => item.category === selectedCategory.value);
});

const handleFilterChange = (selectedValue) => {
  selectedCategory.value = selectedValue;
};

const handleTabChange = (newTab) => {
  activeTab.value = newTab;
};
</script>
