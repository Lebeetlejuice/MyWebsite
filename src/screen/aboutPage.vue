<template>
  <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">{{ t('aboutPage.titleSection') }}t</h2>
      <p class="text-lg text-gray-600 mb-12">
        {{ t('aboutPage.paragrapheSection') }}
      </p>
      
      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid sm:grid-cols-2 gap-6">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
        </div>

        <input
          v-model="form.subject"
          type="text"
          placeholder="Subject"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          required
        />

        <textarea
          v-model="form.message"
          rows="5"
          placeholder="Your Message"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none resize-none"
          required
        ></textarea>

        <button
          type="submit"
          class="inline-flex items-center justify-center px-8 py-3 text-white bg-black rounded-full hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      <!-- Social Icons -->
      <div class="mt-12 flex justify-center gap-6 text-gray-700">
        <a href="https://github.com" target="_blank" class="hover:text-black transition">
          <Icon icon="mdi:github" class="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" class="hover:text-black transition">
          <Icon icon="mdi:linkedin" class="w-6 h-6" />
        </a>
        <a href="mailto:you@example.com" class="hover:text-black transition">
          <Icon icon="mdi:email-outline" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue'

const { t } = useI18n()
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Simule un envoi, à connecter à EmailJS, Formspree, ou backend perso
  console.log('Form submitted:', form)
  alert('Message sent! 🚀')
  // reset
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>
