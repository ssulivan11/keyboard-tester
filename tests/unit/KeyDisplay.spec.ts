import { mount } from '@vue/test-utils';
import KeyboardDisplay from '@/components/KeyboardDisplay.vue';

describe('KeyboardDisplay.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(KeyboardDisplay);
    expect(wrapper.find('[data-test="key-1"]').text()).toBe('! 1');
  });
});
