<template>
  <div class="container profile-content">
    <vue-table-dynamic :params="tableData" ref="table"></vue-table-dynamic>
  </div>
</template>

<script>
import axios from 'axios';
import VueTableDynamic from 'vue-table-dynamic';
import filters from '../filters';

export default {
  props: ['repoUrl'],

  data() {
    return {
      tableData: {
        data: [['Name', 'Forks', 'Size', 'Created', 'Updated']],
        header: 'row',
        border: true,
        stripe: true,
        enableSearch: true,
        sort: [0],
        pagination: true,
        pageSize: 10,
        pageSizes: [10, 20, 50],
        columnWidth: [{ column: 0, width: 150 }, { column: 1, width: 100 }],
      },
    };
  },

  components: { VueTableDynamic },

  methods: {
    dateFilter(date) {
      return filters.dateTimeFilter(date);
    },

    fetchUserRepos() {
      if (this.repoUrl) {
        axios.get(this.repoUrl).then(({ data }) => {
          // this.tableData.data = data;

          data.forEach((item) => {
            this.tableData.data.push([
              `${item.name}`,
              `${item.forks_count}`,
              `${item.size}`,
              this.dateFilter(item.created_at),
              this.dateFilter(item.updated_at),
            ]);
          });
        });
      }
    },
  },

  mounted() {
    // `${item.html_url}`,
    this.fetchUserRepos();
  },
};
</script>
