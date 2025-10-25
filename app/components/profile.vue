<template>
  <div v-if="profile" class="flex flex-col items-center gap-6">
    <div>
      <img src="~/assets/images/logo.png" alt="Логотип компании Наследие" class="w-120 h-120">
    </div>
    <h2 class="text-2xl font-semibold text-content">{{ profile.companyName }}</h2>
    <EntityStats
        :is-verified="profile.isVerified"
        :rating="profile.rating"
        :reviews="profile.reviews"
    />
    <UiButton variant="primary">
      Показать номер телефона
    </UiButton>
    <div class="flex items-center gap-2">
      <UiButton variant="tab" :active="activeTab === 'products'" @click="emit('tab-change', 'products')">
        Товары и услуги
      </UiButton>
      <UiButton variant="tab" :active="activeTab === 'agents'" @click="emit('tab-change', 'agents')">
        Агенты <span class="text-gray-500">{{ agentsCount }}</span>
      </UiButton>
      <UiButton variant="tab" :active="activeTab === 'about'" @click="emit('tab-change', 'about')">
        О компании
      </UiButton>
    </div>
  </div>
</template>

<script setup>
const { data: profile } = await useFetch('/api/profile');

defineProps({
  activeTab: {
    type: String,
    default: 'products'
  },
  agentsCount: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['tab-change']);
</script>
