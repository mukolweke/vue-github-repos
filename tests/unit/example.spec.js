import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Login.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Github';
    const wrapper = shallowMount(Login, {
      propsData: { name },
    });
    expect(wrapper.text()).to.include(name);
  });
});
