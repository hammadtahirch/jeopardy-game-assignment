<template>
  <div
    :class="[
      'fixed bottom-0 right-0 p-4 rounded-tl-md text-white shadow-lg m-2',
      {
        'bg-red-500': score < 0,
        'bg-green-500': score > 0,
        'bg-gray-500': score === 0
      }
    ]"
  >
    <h3 class="text-lg font-bold">Score: ${{ score }}</h3>
  </div>
</template>
  
  <script>
  export default {
    name: 'GameScoreboard',
    props: {
      score: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional component-specific styles here if necessary */
  </style>
  