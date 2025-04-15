<template>
  <div class="flex flex-col lg:flex-row justify-between w-full p-4 lg:p-10">
    <div class="flex-1 p-4">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold">Contactez-moi</h2>
      <form class="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Votre nom"
          class="p-2 border border-gray-300 rounded-md text-sm sm:text-base"
        />
        <input
          type="email"
          placeholder="Votre email"
          class="p-2 border border-gray-300 rounded-md text-sm sm:text-base"
        />
        <textarea
          placeholder="Votre message"
          class="p-2 border border-gray-300 rounded-md text-sm sm:text-base"
          rows="5"
        ></textarea>
        <button
          type="submit"
          class="bg-blue-500 text-white p-2 rounded-md text-sm sm:text-base hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <img
        src="./../assets/contact.jpg"
        alt="Contact"
        class="h-[150px] sm:h-[200px] md:h-[300px] w-auto"
      />
    </div>
  </div>
</template>