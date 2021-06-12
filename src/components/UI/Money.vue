<template>
  <input
    class="ui-money"
    type="text"
    v-model="valueInput"
    v-filter="'[0-9., ]'"
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
    };
  },
  watch: {
    valueInput() {
      // console.log('watch', this.valueInput, strToNum(this.valueInput));
      this.$emit('input', strToNum(this.valueInput));
    },
  },
};
</script>
