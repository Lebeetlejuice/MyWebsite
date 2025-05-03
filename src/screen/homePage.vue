<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm } = useI18n()

const skills = computed(() => tm('HomePage.skills.list'))
const toolSkills = computed(() => tm('HomePage.skills.Toolslist'))
const experience = computed(() => tm('HomePage.experience'))
</script>
<template>
  <section id="HomePage" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">{{ t('HomePage.title') }}</h2>

      <div class="space-y-12">
        <div class="max-w-4xl">
          <p class="text-gray-600 leading-relaxed text-lg">
            {{ t('HomePage.intro') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold mb-6">{{ t('HomePage.experienceTitle') }}</h3>
            <div class="space-y-4">
              <div
                class="p-6 bg-white rounded-lg shadow-lg"
                v-for="(item, index) in experience"
                :key="index"
              >
                <h4 class="font-medium text-lg">{{ item.title }}</h4>
                <p class="text-gray-600 mb-3">{{ item.date }}</p>
                <p class="text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-6">{{ t('HomePage.skillsTitle') }}</h3>
            <div class="grid grid-cols-1 gap-4">
              <div class="p-6 bg-white rounded-lg shadow-lg">
                <h4 class="font-medium text-lg mb-4">{{ t('HomePage.skills.development') }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(skill, i) in skills"
                    :key="i"
                    class="px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              <!-- Design & Tools -->
              <div class="p-6 bg-white rounded-lg shadow-lg">
                <h4 class="font-medium text-lg mb-4">{{ t('HomePage.skills.designTools') }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(toolskill, i) in toolSkills"
                    :key="i"
                    class="px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {{ toolskill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end space-y-12 -->
    </div>
  </section>
</template>

<style scoped>
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100px, 50px);
  }
  50% {
    transform: translate(0, 100px);
  }
  75% {
    transform: translate(-100px, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
