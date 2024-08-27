<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <!-- Modal container with responsive width -->
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-md mx-4">
      <!-- Display the question text -->
      <h2 class="text-xl font-bold mb-4">{{ question.question }}</h2>
      
      <!-- Loop through answers and create buttons for each -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          v-for="answer in answers"
          :key="answer"
          @click="$emit('answer', answer)"
          class="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-colors duration-200 w-full"
        >
          {{ answer }}
        </button>
      </div>

      <!-- Close button to emit close event -->
      <button
        @click="$emit('close')"
        class="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors duration-200 w-full"
      >
        Close
      </button>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'QuestionModal',
    props: {
      question: {
        type: Object,
        required: true,
      },
      answers: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Component-specific styles could be added here */
  </style>
  