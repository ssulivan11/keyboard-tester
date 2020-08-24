<template>
  <div class="row" data-test="row-functional-keys">
    <div
      v-for="keyboardItem in arr"
      :key="keyboardItem.key"
      :class="[
        keyboardItem.classes,
        keyboardObject[keyboardItem.key] ? 'key--activated' : '',
        activeKey === keyboardItem.key && wasPressed ? 'key--active' : '',
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
import { keyboardObject } from '../../utils/helperKeys';

export default Vue.extend({
  name: 'KeyDisplay',
  props: {
    arr: Array,
    activeKey: String,
    wasPressed: Boolean,
    keyboardData: Object,
  },
  data() {
    return { keyboardObject: keyboardObject(this.keyboardData) };
  },
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
@import './KeyDisplay.scss';
</style>
