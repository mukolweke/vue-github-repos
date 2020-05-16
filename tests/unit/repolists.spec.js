import { assert, expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import RepoLists from '@/components/ReposList.vue';
import VueTableDynamic from 'vue-table-dynamic';

describe('RepoLists.vue', () => {
  let wrapper;
  const repoUrl = 'https://api.github.com/users/mukolweke/repos';

  beforeEach(() => {
    wrapper = shallowMount(RepoLists, {
      propsData: { repoUrl },
    });
  });

  it('vue table is mounted', () => {
    assert.isTrue(wrapper.contains(VueTableDynamic));
  });

  it('props passed is actual one', () => {
    assert.equal(wrapper.props('repoUrl'), repoUrl);
  });

  it('initial table data is table column heading', () => {
    expect(wrapper.vm.tableData.data[0])
      .to.have.members(['Name', 'Forks', 'Size', 'Created', 'Updated']);
  });
});
