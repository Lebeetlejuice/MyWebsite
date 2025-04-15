<script setup>
</script>

<template>
  <!-- Hero Section -->
  <section
    id="home"
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-b from-gray-50"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div>
          <h1 class="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Fullstack
            <br />
            Developer
            <br />
            <span class="text-gray-400">Based in Paris</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            I create engaging digital experiences that help businesses connect
            with their audience and achieve their goals.
          </p>
          <div class="flex gap-4">
            <a
              href="#projects"
              class="inline-flex items-center px-6 py-3 bg-black text-white text-base font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              View My Work

            </a>
            <a
              href="#contact"
              class="inline-flex items-center px-6 py-3 border border-black text-base font-medium rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <!-- Image Block -->
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
            alt="Developer workspace with code on screen"
            class="rounded-2xl shadow-2xl w-full aspect-[16/9] object-cover"
          />
          <div
            class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
          >
            <p class="text-sm font-medium">
              Currently available for freelance work
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>