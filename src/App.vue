<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import AboutPage from './screen/aboutPage.vue'
import BackgroundScreen from './screen/backgroundScreen.vue'
import HomePage from './screen/homePage.vue'
import MyProjects from './screen/myProjects.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          history.replaceState(null, '', `#${id}`)
        }
      })
    },
    {
      threshold: 0.5 // Au moins 50% de la section visible
    }
  )

  sections.forEach((section) => observer.observe(section))
})
</script>

<template>
  <div class="flex flex-col w-screen mt-2 px-10 fixed z-50">
    <NavbarComponent />
  </div>
  <div
    class="bg-gray-50 flex flex-col max-w-screen overflow-x-hidden items-center sm:pt-10 lg:pt-2 pt-10 pb-10"
  >
    <BackgroundScreen />
  </div>
  <main class="bg-gray-50 flex flex-col max-w-screen overflow-x-hidden items-center py-10">
    <div class="bg-white rounded-3xl shadow-lg p-4 w-11/12">
      <HomePage />
    </div>
  </main>
  <div class="bg-gray-50">
    <main class="flex flex-col max-w-screen overflow-x-hidden items-center py-10">
      <MyProjects />
    </main>
  </div>
  <main class="bg-gray-50 flex flex-col max-w-screen overflow-x-hidden items-center pt-10">
    <div class="rounded-t-lg shadow-lg max-w-screen overflow-x-hidden">
      <AboutPage />
    </div>
  </main>
</template>
