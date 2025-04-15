<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import AboutPage from './screen/aboutPage.vue';
import BackgroundScreen from './screen/backgroundScreen.vue';
import HomePage from './screen/homePage.vue';
import MyProjects from './screen/myProjects.vue';

</script>

<template>
  <div class="flex flex-col w-screen mt-2 px-4 fixed bg-gray-50 z-50">
    <NavbarComponent/>
  </div>
  <div class="bg-gray-50"> 
    <BackgroundScreen />
  </div>
  <div class="bg-gray-50"> 
    <main class="flex flex-col w-screen items-center">
      <div class="bg-white rounded-3xl shadow-lg p-4 w-11/12 sm:w-4/5 lg:w-4/5">
        <HomePage />
      </div>
    </main>
  </div>
  <div class="bg-gray-50"> 
    <main class="flex flex-col w-screen items-center py-10">
      <div class="rounded-3xl p-8 ">
        <MyProjects />
      </div>
    </main>
  </div>
  <div class="bg-gray-50"> 
    <main class="flex flex-col w-screen items-center">
      <div class="bg-white rounded-3xl shadow-lg w-screen">
        <AboutPage />
      </div>
    </main>
  </div>
</template>