<template>
  <div class="table-card">
    <div class="table-card__id cell w-1">
      <p class="title">ID</p>
      <p>{{ itemId }}</p>
    </div>
    <div class="table-card__date cell w-2">
      <p class="title">Date</p>
      <p>{{ itemDate }}</p>
    </div>
    <div class="table-card__name cell w-3">
      <p class="title">Name</p>
      <p>{{ itemName }}</p>
    </div>
    <div class="table-card__money cell w-4">
      <p class="title">Money</p>
      <p>{{ itemMoney }}</p>
    </div>
  </div>
</template>
<script>
import TableItemMixin from '@/mixins/TableItemMixin';

export default {
  mixins: [TableItemMixin],
  name: 'TableItem',
  data: () => ({}),
};
</script>
