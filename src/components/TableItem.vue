<template>
  <div class="table-card">
    <div class="table-card__id cell">
      <p class="title">ID</p>
      <p>{{ itemId }}</p>
    </div>
    <div class="table-card__date cell">
      <p class="title">Date</p>
      <p>{{ itemDate }}</p>
    </div>
    <div class="table-card__name cell">
      <p class="title">Name</p>
      <p>{{ itemName }}</p>
    </div>
    <div class="table-card__money cell">
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
