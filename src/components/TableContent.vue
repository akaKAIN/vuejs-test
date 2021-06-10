<template>
  <div class="table-content">
    <div class="table-content__header container p-0">
      <div class="row-wrapper">
        <div class="header-cell w-1">
          <p class="title">ID</p>
        </div>
        <div class="header-cell w-2">
          <p class="title">Date</p>
        </div>
        <div class="header-cell w-3">
          <p class="title">Name</p>
        </div>
        <div class="header-cell w-4">
          <p class="title">Money</p>
        </div>
      </div>
    </div>
    <div class="table-content__body container p-0">
      <table-item
        v-for="item in items" :key="item.id"
        :item-id="item.id"
        :item-date="item.date"
        :item-name="item.name"
        :item-money="item.money"
      ></table-item>
    </div>
  </div>
</template>
<script>
import TableItem from '@/components/TableItem.vue';

export default {
  name: 'TableContent',
  components: { TableItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
};
</script>
