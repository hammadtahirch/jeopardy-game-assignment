import { mount, config } from '@vue/test-utils'
import GameBoard from '@/components/GameBoard.vue'
import QuestionModal from '@/components/QuestionModal.vue'
import GameScoreboard from '@/components/GameScoreboard.vue'
config.showDeprecationWarnings = false

jest.mock('@/assets/questions.json', () => [
  { category: 'Category 1', question: 'Question 1', answer: 'Answer 1', value: '$100' },
  { category: 'Category 2', question: 'Question 2', answer: 'Answer 2', value: '$200' },
])

describe('GameBoard.vue', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(GameBoard, {
      methods: {
        showMessage: jest.fn(),
      },
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the game board', () => {
    expect(wrapper.find('h1').text()).toBe('Jeopardy Game Board')
    expect(wrapper.findAll('.grid-cols-1 > div')).toHaveLength(2) // 2 categories
  })

  it('initializes the game board correctly', () => {
    expect(wrapper.vm.categories).toHaveLength(2)
    expect(wrapper.vm.score).toBe(0)
    expect(wrapper.vm.answeredQuestionsIds).toEqual([])
  })

  it('selects a question when clicked', async () => {
    const questionButton = wrapper.find('button')
    await questionButton.trigger('click')
    expect(wrapper.vm.selectedQuestion).not.toBeNull()
  })

  it('updates score correctly when an answer is correct', () => {
    const initialScore = wrapper.vm.score;
    const selectedQuestion = { id: 1, value: '$100', answer: 'Answer 1', question: 'Sample Question' };

    wrapper.vm.selectQuestion(selectedQuestion.id, 'Category 1', selectedQuestion);
    wrapper.setData({ selectedQuestion });
    wrapper.vm.checkAnswer('Answer 1');

    expect(wrapper.vm.score).toBe(initialScore + 100);
  });

  it('disables answered questions', async () => {
    wrapper.vm.answeredQuestionsIds = [1]
    await wrapper.vm.$nextTick()

    const disabledButton = wrapper.find('button[disabled]')
    expect(disabledButton.exists()).toBe(true)
  })

  it('closes the modal', () => {
    wrapper.vm.selectedQuestion = { id: 1, value: '$100', answer: 'Answer 1' }
    wrapper.vm.selectedAnswers = ['Answer 1', 'Wrong 1', 'Wrong 2', 'Wrong 3']

    wrapper.vm.closeModal()

    expect(wrapper.vm.selectedQuestion).toBeNull()
    expect(wrapper.vm.selectedAnswers).toEqual([])
  })
})
