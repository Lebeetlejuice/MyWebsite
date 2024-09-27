<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import HomePage from './screen/homePage.vue';

</script>

<template>
  <div class="bg-orange-100">
  <div class="flex flex-col w-full px-20 py-4 fixed">
    <NavbarComponent/>
  </div>
  <main class="flex flex-col w-screen px-20 pt-28">
    <HomePage />
  </main>
</div>
</template>