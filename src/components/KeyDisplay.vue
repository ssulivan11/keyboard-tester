<template>
  <div class="row" data-test="row-functional-keys">
    <div
      v-for="keyboardItem in arr"
      :key="keyboardItem.key"
      :class="[
        keyboardItem.classes,
        keyboardObject[keyboardItem.key] ? 'key--activated' : '',
        activeKey === keyboardItem.key && wasPressed ? 'key--active' : ''
      ]"
      :data-test="`key-${formatDataTest(keyboardItem.key)}`"
    >
      <span
        class="key__sub-key"
        v-if="keyboardItem.subKey"
        v-html="formatKeyView(keyboardItem.subKey)"
      />
      <span v-if="!keyboardItem.icon" v-html="formatKeyView(keyboardItem.key)" />
      <v-icon v-if="keyboardItem.icon" :name="keyboardItem.icon" />
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
    activeKey: String,
    wasPressed: Boolean,
  },
  data: () => ({
    keyboardObject,
  }),
  methods: {
    formatDataTest: (key: string) => key.toLowerCase().replace(/\s/g, '-'),
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
        case 'Enter':
        case 'option':
        case 'cmd':
        case 'command':
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
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--off-white);
  color: var(--black);
  flex-direction: column;
  text-align: center;
  margin-left: 2px;
  border-radius: 4px;
  border: 2px solid var(--off-white);

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
    border-color: var(--gray);
  }
  &--color-green {
    background: var(--green);
    border-color: var(--green);
  }
  &--color-yellow {
    background: var(--yellow);
    border-color: var(--yellow);
  }
  &--color-red {
    background: var(--red);
    border-color: var(--red);
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

  &--activated {
    background-color: var(--activated);
    border-color: var(--activated);
  }
  &--active {
    animation: activated 0.2s ease-out;
    border-color: var(--active);
  }
}

@keyframes keypressed {
  0% {
    transform: scale(1);
  }
  85% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes activated {
  0% {
    transform: scale(1);
  }
  85% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
