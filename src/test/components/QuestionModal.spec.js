import { mount, shallowMount } from '@vue/test-utils'
import QuestionModal from '@/components/QuestionModal.vue'

describe('QuestionModal.vue', () => {
  const question = { question: 'What is the capital of France?', category: 'Geography' };
  const answers = ['Paris', 'London', 'Berlin', 'Madrid'];

  const wrapper = shallowMount(QuestionModal, {
    propsData: { question: question, answers: answers },
  });

  it('renders the question correctly', () => {
    expect(wrapper.find('h2').text()).toBe(question.question)
  })

  it('Should display all available answers', () => {
    const answerButtons = wrapper.findAll('button.bg-gray-300');
    expect(answerButtons.length).toBe(answers.length);
    answers.forEach((answer, index) => {
      expect(answerButtons.at(index).text()).toBe(answer);
    });
  });

  it('emits "answer" event when an answer button is clicked', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().answer).toBeTruthy();
  });

  it('Should emit "close" event when the close button is clicked', () => {
    wrapper.find('button.bg-red-500').trigger('click');
    expect(wrapper.emitted().close).toBeTruthy();
  });

})