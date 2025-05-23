<script setup>
import Carousel from 'primevue/carousel'
import edf from './../assets/edf.png'
import luxembourg from './../assets/luxembourg.png'
import wikiway from './../assets/wikiway.png'
import github from './../assets/github.png'
import capgemini from './../assets/capgemini.png'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const images = {
  edf,
  luxembourg,
  wikiway,
  github,
  capgemini
}

const products = computed(() => {
  return tm('ProjectsPage.list').map((project) => ({
    ...project,
    image: images[project.image] || ''
  }))
})

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
]
</script>

<template>
  <section id="projects" class="bg-gradient-to-b from-white to-gray-50">
    <div class="w-screen bg-gray-50">
      <!-- Conteneur principal -->
      <div class="pt-[80px] sm:pt-[96px] lg:pt-[112px] p-4 sm:p-6 lg:p-10">
        <div class="grid gap-4">
          <div class="flex items-center justify-center">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
              {{ t('ProjectsPage.title') }}
            </h2>
          </div>
        </div>

        <!-- Conteneur du carrousel avec une hauteur fixe -->
        <div class="w-full h-full">
          <Carousel
            :value="products"
            :numVisible="1"
            :numScroll="1"
            :responsiveOptions="responsiveOptions"
            autoplay
            :autoplayInterval="7000"
            circular
            class="flex w-full h-auto transition-transform duration-1000 ease-in-out mt-8"
          >
            <template #item="slotProps">
              <div
                class="border border-gray-200 rounded-xl p-4 sm:p-6 bg-white transition-shadow duration-300 h-full flex flex-col justify-between"
              >
                <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4">
                  {{ slotProps.data.boite }}
                </h1>
                <div class="mb-4 flex justify-center flex-grow">
                  <img
                    :src="slotProps.data.image"
                    :alt="slotProps.data.name"
                    class="w-auto min-h-2 sm:max-w-sm lg:max-w-md h-auto object-contain rounded-lg"
                  />
                </div>
                <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-2">
                  {{ slotProps.data.name }}
                </h3>
                <p class="text-gray-600 text-sm sm:text-base lg:text-lg text-center">
                  {{ slotProps.data.description }}
                </p>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>
