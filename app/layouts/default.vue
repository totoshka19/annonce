<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <Header />
    <main class="flex-grow">
      <Profile />
      <slot />
    </main>
    <Footer />
  </div>
</template>
