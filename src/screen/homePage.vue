<script setup></script>
<template>
  <!-- About Section -->
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">About Me</h2>

      <div class="space-y-12">
        <!-- Introduction -->
        <div class="max-w-4xl">
          <p class="text-gray-600 leading-relaxed text-lg">
            I'm a creative developer with a passion for building beautiful, functional websites and applications. 
            With expertise in modern web technologies, I create engaging digital experiences that help businesses 
            grow and succeed online. My approach combines technical excellence with creative problem-solving, 
            ensuring that every project not only meets but exceeds client expectations.
          </p>
        </div>

        <!-- Experience & Skills -->
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Experience -->
          <div>
            <h3 class="text-2xl font-bold mb-6">Experience</h3>
            <div class="space-y-4">
              <div class="p-6 bg-white rounded-lg shadow-lg">
                <h4 class="font-medium text-lg">Developer fullstack @ Capgemini</h4>
                <p class="text-gray-600 mb-3">2023 - Present</p>
                <p class="text-gray-600">
                  Led development of multiple high-impact web applications, focusing on performance optimization and user experience.
                </p>
              </div>
              <div class="p-6 bg-white rounded-lg shadow-lg">
                <h4 class="font-medium text-lg">Developer fullstack mobile @ Zémus</h4>
                <p class="text-gray-600 mb-3">2021 - 2023</p>
                <p class="text-gray-600">
                  Developed responsive web applications and collaborated with designers to implement pixel-perfect interfaces.
                </p>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div>
            <h3 class="text-2xl font-bold mb-6">Skills</h3>
            <div class="grid grid-cols-1 gap-4">
              <!-- Development -->
              <div class="p-6 bg-white rounded-lg shadow-lgs">
                <h4 class="font-medium text-lg mb-4">Development</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 rounded-full">Python</span>
                  <span class="px-3 py-1 bg-gray-100 rounded-full">Java</span>
                  <span class="px-3 py-1 bg-gray-100 rounded-full">Vue</span>
                  <span class="px-3 py-1 bg-gray-100 rounded-full">react.js & native</span>
                  <span class="px-3 py-1 bg-gray-100 rounded-full">Swift</span>
                  <span class="px-3 py-1 bg-gray-100 rounded-full">SQL</span>
                </div>
              </div>
              <!-- Design & Tools -->
              <div class="p-6 bg-white rounded-lg shadow-lg">
                <h4 class="font-medium text-lg mb-4">Design & Tools</h4>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end space-y-12 -->
    </div>
  </section>
</template>

<style scoped>
@keyframes move {
  0% { transform: translate(0, 0); }
  25% { transform: translate(100px, 50px); }
  50% { transform: translate(0, 100px); }
  75% { transform: translate(-100px, 50px); }
  100% { transform: translate(0, 0); }
}
</style>