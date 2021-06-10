<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <table-content :items="pageItems"></table-content>

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
import TableContent from '@/components/TableContent.vue';
import { mapGetters } from 'vuex';

export default {

  name: 'DataTable',
  components: { TableContent },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
  }),

  computed: {
    ...mapGetters(['data']),
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    pageItems() {
      const minLimit = (this.page - 1) * this.pageSize;
      return this.data.slice(minLimit, minLimit + this.pageSize);
    },
  },
};
</script>
