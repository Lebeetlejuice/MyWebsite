<script setup>
import Carousel from 'primevue/carousel';
import edf from './../assets/edf.png';
import luxembourg from './../assets/luxembourg.png';
import wikiway from './../assets/wikiway.jpg';   
import godot from './../assets/godot.png';
import { computed } from 'vue';

const products = computed(() =>[
  {
    name: 'EDF',
    image: edf,
    description: 'Projet réalisé pour EDF avec Capgemini, axé sur la transition énergétique.',
    boite: 'Capgemini'
  },
  {
    name: 'Ministère du Luxembourg',
    image: luxembourg,
    description: 'Développement d’une plateforme numérique pour le ministère luxembourgeois.',
    boite: 'Capgemini'
  },
  {
    name: 'Wikipédia',
    image: wikiway,
    description: "Projet réalisé en partenariat avec Wikipédia, dans le cadre du développement d'une application mobile innovante combinant React Native pour le front-end et Python (Flask) pour le back-end. L’objectif de cette application était de valoriser le patrimoine culturel en permettant aux utilisateurs de découvrir les monuments historiques autour d’eux, simplement en marchant dans la rue. Grâce à l’utilisation du langage SPARQL, propre au système de données sémantiques de Wikipédia (Wikidata), l’application interroge en temps réel une base de données géolocalisée pour identifier les monuments situés à proximité. Lorsqu’un monument est détecté, l’utilisateur peut interagir avec celui-ci via une carte interactive et accéder à une fiche descriptive complète extraite de Wikipédia.",
    boite: 'Zémus'
  },
  {
    name: 'Projet development a game',
    image: godot,
    description: 'Développement d’une plateforme numérique pour le ministère luxembourgeois.',
    boite: ''
  },
]);

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
];
</script>

<template>
    <section id="projects" class="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
    <div class="w-screen bg-gray-50">
        <!-- Conteneur principal -->
        <div class="pt-[80px] sm:pt-[96px] lg:pt-[112px] p-4 sm:p-6 lg:p-10">
        <div class="grid gap-4">
            <div class="flex items-center justify-center">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">My Projects</h2>
            </div>
        </div>

        <!-- Conteneur du carrousel avec une hauteur fixe -->
        <div class="w-full h-[500px] sm:h-[600px] lg:h-[700px]">
            <Carousel 
            :value="products" 
            :numVisible="1" 
            :numScroll="1" 
            :responsiveOptions="responsiveOptions"
            autoplay 
            :autoplayInterval="8000" 
            circular
            class="w-full h-full transition-transform duration-1000 ease-in-out mt-8"
            >
            <template #item="slotProps">
                <div class="border border-gray-200 rounded-xl p-4 sm:p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4">{{ slotProps.data.boite }}</h1>
                <div class="mb-4 flex justify-center flex-grow">
                    <img 
                    :src="slotProps.data.image" 
                    :alt="slotProps.data.name" 
                    class="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain rounded-lg"
                    />
                </div>
                <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-2">{{ slotProps.data.name }}</h3>
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
