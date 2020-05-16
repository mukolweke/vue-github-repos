import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Login.vue', () => {
  let wrapper;

  const name = 'Github';

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      propsData: { name },
    });
  });

  it('renders props.name when passed', () => {
    assert.include(wrapper.text(), name);
  });
});
