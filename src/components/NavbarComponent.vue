<script setup>
import MegaMenu from 'primevue/megamenu';
import { ref } from 'vue';
const items = ref([
      {
        label: 'MAFFEI Enzo',
      },
      {
        label: 'Home',
      },
      {
        label: 'Experiences',
      },
      {
        label: 'Etudes',
      },
      {
        label: 'In progress...',
      },
      {
        label: 'Contact',
      },
    ]);

</script>

<template>
    <MegaMenu :pt="{	root: {class:'p-4 shadow-xl'},rootList: {class:'flex justify-end w-full'},item:{class:'flex px-[70px]'} }" style="border-radius: 6rem" :model="items" orientation="horizontal">
      <template #start>
        <img alt="lineMdGithubLoop0" class="logo px-10" src="./../assets/github.svg"/>  
        <span class="text-center font-serif text-1xl font-semibold">{{ items[0].label }}</span>
      </template>
      <template #item="{ item }">
        <a v-if="item !== items[0]">
          <span class="whitespace-nowrap text-lg font-serif">{{ item.label }}</span>
        </a>
      </template>
    </MegaMenu>
</template>