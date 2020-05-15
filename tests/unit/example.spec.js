import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import GithubLogin from '@/components/GithubLogin.vue';

describe('GithubLogin.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Github';
    const wrapper = shallowMount(GithubLogin, {
      propsData: { name },
    });
    expect(wrapper.text()).to.include(name);
  });
});
