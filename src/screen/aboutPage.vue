<template>
  <section
    id="contact"
    class="py-10 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">{{ t('aboutPage.titleSection') }}</h2>
      <p class="text-lg text-gray-600 mb-12">
        {{ t('aboutPage.paragrapheSection') }}
      </p>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid sm:grid-cols-2 gap-6">
          <input
            v-model="form.name"
            type="text"
            :placeholder="$t('aboutPage.Name')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
          <input
            v-model="form.email"
            type="email"
            :placeholder="$t('aboutPage.Email')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
        </div>

        <input
          v-model="form.subject"
          type="text"
          :placeholder="$t('aboutPage.Subject')"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          required
        />

        <textarea
          v-model="form.message"
          rows="5"
          :placeholder="$t('aboutPage.Message')"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none resize-none"
          required
        ></textarea>

        <button
          type="submit"
          class="inline-flex items-center justify-center px-8 py-3 text-white bg-black rounded-full hover:bg-gray-800 transition"
        >
          {{ t('aboutPage.sendButton') }}
        </button>
      </form>

      <div v-if="showtextsucess == true" class="pt-3">
        <p class="text-lg text-green-600">
          {{ t('aboutPage.MessageSend') }}
        </p>
      </div>
      <div v-if="showtextfail == true" class="pt-3">
        <p class="text-lg text-red-600">
          {{ t('aboutPage.MessageFail') }}
        </p>
      </div>

      <!-- Social Icons -->
      <div class="pt-12 flex justify-center gap-6 text-gray-700">
        <a href="https://github.com" target="_blank" class="hover:text-black transition">
          <Icon icon="mdi:github" class="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/enzo-maffei-5998431b3/"
          target="_blank"
          class="hover:text-black transition"
        >
          <Icon icon="mdi:linkedin" class="w-6 h-6" />
        </a>
        <a href="mailto:maffei.enzo@outlook.fr" class="hover:text-black transition">
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
import emailjs from 'emailjs-com'
import { ref } from 'vue'

const { t } = useI18n()
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const showtextsucess = ref(false)
const showtextfail = ref(false)
const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const emailUserId = import.meta.env.VITE_EMAIL_USER_ID
const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID

const handleSubmit = () => {
  const now = new Date()

  const formatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`

  const templateParams = {
    from_name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
    time: formatted
  }

  emailjs.send(emailServiceId, emailTemplateId, templateParams, emailUserId).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text)
      // reset form
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      showtextsucess.value = true
      console.log(showtextsucess.value)
      setTimeout(() => {
        showtextsucess.value = false
      }, 10000)
      console.log(showtextsucess.value)
    },
    (err) => {
      console.error('FAILED...', err)
      showtextfail.value = true
      setTimeout(() => {
        showtextfail.value = false
      }, 10000)
    }
  )
}
</script>
