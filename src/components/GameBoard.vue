<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-8">Jeopardy Game Board</h1>
    <!-- Responsive grid layout -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <!-- Loop through categories -->
      <div v-for="(category, index) in categories" :key="index" class="text-center">
        <div class="font-bold text-sm mb-2">{{ category.name }}</div>
        <!-- Loop through questions within each category -->
        <div v-for="question in category.questions" :key="question.id">
          <button
            :disabled="isQuestionAnswered(question.id)"
            class="w-full sm:w-16 h-16 mb-1 bg-blue-500 text-white rounded hover:bg-blue-700"
            @click="selectQuestion(question)"
          >
            {{ question.value }}
          </button>
        </div>
      </div>
    </div>

    <!-- Question Modal -->
    <question-modal
      v-if="selectedQuestion"
      :question="selectedQuestion"
      :answers="shuffledAnswers"
      @close="closeModal"
      @answer="checkAnswer"
    />

    <!-- Game Scoreboard -->
    <game-scoreboard :score="score" />
  </div>
</template>
  
  <script>
  import QuestionModal from './QuestionModal.vue';
  import GameScoreboard from './GameScoreboard.vue';
  import questionsData from '../assets/questions.json';
  
  export default {
    name: 'GameBoard',
    components: {
      QuestionModal,
      GameScoreboard,
    },
    data() {
      return {
        categories: [],
        selectedQuestion: null,
        selectedAnswers: [],
        score: 0,
        answeredQuestionsIds: [],
      };
    },
    computed: {
      shuffledAnswers() {
        // Returns shuffled answers for the selected question
        if (this.selectedQuestion) {
          const fakeAnswers = [
            'Febtober!',
            "I'm Batman",
            "I don't know where it went, I'm confused.",
            'Threeve. A combination of 3 and 5 and you wagered Texas.',
          ];
          const allAnswers = [this.selectedQuestion.answer, ...fakeAnswers];
          return allAnswers.sort(() => Math.random() - 0.5).slice(0, 4);
        }
        return [];
      },
    },
    mounted() {
      this.initializeGameBoard();
    },
    methods: {
      initializeGameBoard() {
        let counter = 1;
        // Group questions by category
        const grouped = questionsData.reduce((acc, question) => {
          if (!acc[question.category]) {
            acc[question.category] = { name: question.category, questions: [] };
          }
          acc[question.category].questions.push({ ...question, id: counter++ });
          return acc;
        }, {});
        this.categories = Object.values(grouped);
        this.showMessage("The game board is set! Are you ready to become a quiz champion? 🏆", "success");
      },
      selectQuestion(question) {
        this.selectedQuestion = question;
      },
      closeModal() {
        this.selectedQuestion = null;
        this.selectedAnswers = [];
      },
      checkAnswer(selectedAnswer) {
        const questionValue = parseInt(this.selectedQuestion.value.replace('$', ''), 10);
        if (selectedAnswer === this.selectedQuestion.answer) {
          this.score += questionValue;
          this.showMessage("Yes! You nailed it! 🥳", "success");
        } else {
          this.score -= questionValue;
          this.showMessage("Uh-oh! That's not correct, but you can do it! 🌈", "danger");
        }
        this.answeredQuestionsIds.push(this.selectedQuestion.id);
        this.closeModal();
      },
      isQuestionAnswered(questionId) {
        return this.answeredQuestionsIds.includes(questionId);
      },
      showMessage(message, type) {
        // Using Vue toast for showing messages
        this.$toast(message, type);
      },
    },
  };
  </script>
  