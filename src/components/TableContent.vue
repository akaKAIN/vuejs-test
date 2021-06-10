<template>
  <div class="table-content">
    <div class="table-content__header"></div>
    <div class="table-content__body">
      <table-item
        v-for="item in data" :key="item.id"
        :item-id="item.id"
        :item-date="item.date"
        :item-name="item.name"
        :item-money="item.money"
      ></table-item>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TableItem from '@/components/TableItem.vue';

export default {
  name: 'TableContent',
  components: { TableItem },
  data: () => ({}),
  computed: {
    ...mapGetters(['data']),
  },
};
</script>
