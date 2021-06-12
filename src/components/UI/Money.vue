<template>
  <input
    class="ui-money"
    type="text"
    v-model="valueInput"
    v-filter="filterRE"
  />
</template>

<script>
import { filterDirective } from '@/directives/filter';
import { strToNum } from '@/filters/numberDigitsFilter';

export default {

  name: 'UiMoney',

  directives: {
    filter: filterDirective,
  },

  data() {
    return {
      valueInput: '',
      filterRE: '[0-9,.]',
    };
  },
  watch: {
    valueInput(val) {
      if (!val) {
        this.$emit('input', '');
        return;
      }
      const result = strToNum(this.valueInput, this.filterRE);
      this.$emit('input', !result ? '' : result);
    },
  },
};
</script>
