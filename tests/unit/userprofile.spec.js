import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import UserProfile from '@/components/UserProfileDetails.vue';

describe('UserProfile.vue', () => {
  let wrapper;

  const userData = {
    avatar: '#',
    username: 'jamesbond',
    name: 'James Bond',
    email: 'jbond@gmail.com',
    bio: 'Name is Bond, James Bond...',
    location: 'England',
    profile_url: '#',
    repos_count: 2,
    repos_url: '#',
    followers_count: 4,
    following_count: 2,
  };

  beforeEach(() => {
    wrapper = shallowMount(UserProfile, {
      propsData: { userData },
    });
  });

  it('props sent is an object', () => {
    assert.isObject(wrapper.props('userData'));
  });

  it('props data sent is same', () => {
    assert.property(wrapper.props('userData'), 'name');
    assert.propertyVal(wrapper.props('userData'), 'name', userData.name);
  });

  it('logout button emits logMeOut', async () => {
    wrapper.find('button').trigger('click');

    await wrapper.vm.$nextTick();

    assert.ok(wrapper.emitted().logMeOut);
  });
});
