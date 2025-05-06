<script setup>
import MegaMenu from 'primevue/megamenu'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const switchLang = (lang) => {
  locale.value = lang
  localStorage.setItem('app_lang', lang)
  isDropdownOpen.value = false
}

const items = computed(() => [
  {
    label: 'MAFFEI Enzo'
  },
  {
    label: t('navbar.home'),
    href: '#home'
  },
  {
    label: t('navbar.about'),
    href: '#HomePage'
  },
  {
    label: t('navbar.projects'),
    href: '#projects'
  },
  {
    label: t('navbar.contact'),
    href: '#contact'
  }
])
</script>

<template>
  <MegaMenu
    :pt="{
      root: {
        class:
          'shadow-xl flex flex-col sm:flex-row items-center sm:justify-between w-full fixed top-0 left-0 z-50 bg-white'
      },
      rootList: {
        class: 'flex flex-col sm:flex-row justify-center sm:justify-end rounded-full'
      },
      item: { class: 'flex justify-center sm:pr-[40px] bg-white mr-4' },
      button: { class: 'flex justify-center sm:px-[30px] py-2' }
    }"
    style="border-radius: 9999px; background-color: white; padding: 0.3rem"
    :model="items"
    orientation="horizontal"
  >
    <template #start>
      <div class="flex items-center gap-4 sm:gap-10 pl-3 sm:py-2">
        <img alt="lineMdGithubLoop0" class="logo h-8 sm:h-10 w-auto" src="./../assets/github.svg" />
        <span class="text-center font-serif text-lg sm:text-xl font-futura font-semibold">
          {{ items[0].label }}
        </span>
        <!-- Dropdown for language selection -->
        <div class="relative">
          <button @click="toggleDropdown" class="px-4 py-2 text-gray-800 rounded-full">
            🌐 {{ t('navbar.language') }}
          </button>
          <div
            v-if="isDropdownOpen"
            class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <button
              @click="switchLang('en')"
              class="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
            >
              🇺🇸 English
            </button>
            <button
              @click="switchLang('fr')"
              class="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
            >
              🇫🇷 Français
            </button>
          </div>
        </div>
      </div>
    </template>
    <template #item="{ item }">
      <a v-if="item.href" :href="item.href" class="whitespace-nowrap text-sm sm:text-lg font-serif">
        {{ item.label }}
      </a>
    </template>
  </MegaMenu>
</template>
