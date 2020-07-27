<template>
  <div class="row" data-test="row-functional-keys">
    <div
      v-for="keyboardItem in arr"
      :key="keyboardItem.key"
      :class="[keyboardItem.classes, keyboardObject[keyboardItem.key] ? 'key--active' : '']"
    >
      <span class="key__sub-key" v-if="keyboardItem.subKey" v-html="keyboardItem.subKey" />
      <span v-html="formatKeyView(keyboardItem.key)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { keyboardObject } from './helperKeys';

export default Vue.extend({
  name: 'KeyDisplay',
  props: {
    arr: Array,
  },
  data: () => ({
    keyboardObject,
  }),
  methods: {
    formatKeyView: (initialKey: string) => {
      switch (initialKey) {
        case 'Escape':
          return 'Esc';
        case 'PageUp':
          return 'PgUp';
        case 'PageDown':
          return 'PgDn';
        case 'CapsLock':
          return 'Caps Lock';
        case 'Left Shift':
        case 'Right Shift':
          return 'Shift';
        case 'Left Control':
        case 'Right Control':
          return 'Ctrl';
        case 'Left Alt':
        case 'Right Alt':
          return 'alt';
        case 'Left Meta':
        case 'Right Meta':
          return 'meta';
        case 'Tab':
        case 'Backspace':
        case 'Delete':
        case 'Home':
        case 'End':
          return initialKey;
        default:
          return initialKey.toUpperCase();
      }
    },
  },
});
</script>

<style scoped lang="scss">
.key {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--off-white);
  color: var(--black);
  flex-direction: column;
  text-align: center;
  margin-left: 2px;
  border-radius: 4px;
  overflow: hidden;
  &--active {
    color: white !important;
    background: black !important;
  }
  &--delete {
    width: 100px;
  }
  &--oneandhalf {
    width: 75px;
  }
  &--enter {
    width: 112px;
  }
  &--caps {
    width: 90px;
  }
  &--shift-left {
    width: 127px;
  }
  &--spacebar {
    width: 300px;
  }
  &--bottom-funct {
    width: 70px;
  }
  &--color-gray {
    background: var(--gray);
  }
  &--color-green {
    background: var(--green);
  }
  &--color-yellow {
    background: var(--yellow);
  }
  &--color-red {
    background: var(--red);
  }
  svg {
    height: 20px;
  }
  &--symbols {
    line-height: inherit;
  }
  &__sub-key {
    display: block;
  }
}
</style>
