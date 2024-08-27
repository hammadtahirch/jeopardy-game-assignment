import { shallowMount } from '@vue/test-utils';
import GameScoreboard from '@/components/GameScoreboard.vue';

describe('GameScoreboard.vue', () => {
    it('should display red background when score is less than 0', () => {
        const wrapper = shallowMount(GameScoreboard, {
            propsData: { score: -100 },
        });

        expect(wrapper.find('.bg-red-500').exists()).toBe(true);
        expect(wrapper.find('.bg-green-500').exists()).toBe(false);
        expect(wrapper.find('.bg-gray-500').exists()).toBe(false);
    });

    it('should display green background when score is greater than 0', () => {
        const wrapper = shallowMount(GameScoreboard, {
            propsData: { score: 100 },
        });

        expect(wrapper.find('.bg-red-500').exists()).toBe(false);
        expect(wrapper.find('.bg-green-500').exists()).toBe(true);
        expect(wrapper.find('.bg-gray-500').exists()).toBe(false);
    });

    it('should display gray background when score is equal to 0', () => {
        const wrapper = shallowMount(GameScoreboard, {
            propsData: { score: 0 },
        });

        expect(wrapper.find('.bg-red-500').exists()).toBe(false);
        expect(wrapper.find('.bg-green-500').exists()).toBe(false);
        expect(wrapper.find('.bg-gray-500').exists()).toBe(true);
    });
});