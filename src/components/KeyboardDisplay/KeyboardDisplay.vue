<template>
  <div>
    <div class="keyboard">
      <div class="keyboard__display">
        <div
          class="row"
          data-test="row-functional-keys"
          v-for="keyboardRowArr in keyboardData.activeKeyboard"
          :key="keyboardRowArr.key"
        >
          <KeyDisplay
            :arr="keyboardRowArr"
            :activeKey="active.key"
            :wasPressed="active.isActive"
            :keyboardData="keyboardData.activeKeyboard"
          />
        </div>
      </div>
      <div class="keyboard__input">
        <input data-test="keyboard-input" type="text" v-on:keyup="keyMonitor" />
      </div>
    </div>
    <h2
      class="active-key"
      :class="{ 'active-key--animate': active.isActive }"
    >{{ active.key === ' ' ? 'space' : active.key }}</h2>

    <button class="audio-button" type="button" v-on:click="toggleAudio">
      <v-icon :name="this.active.audio ? 'volume-2' : 'volume-x'" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import KeyDisplay from '../KeyDisplay/KeyDisplay.vue';

import { vortex } from '../../utils/keyboards';
import { keyboardObject } from '../../utils/helperKeys';

export default Vue.extend({
  name: 'KeyboardDisplay',
  props: {
    keyboardType: String,
  },
  components: {
    KeyDisplay,
  },
  data: () => ({
    active: { key: '...', isActive: false, audio: false },
    keyboardObject: keyboardObject(vortex),
    keyboardData: {
      activeKeyboard: vortex,
    },
    page: { hasLoaded: false },
  }),
  watch: {
    keyboardType(newVal) {
      const newActiveKeyboard = require('../../utils/keyboards')[newVal];
      this.$set(this.keyboardData, 'activeKeyboard', newActiveKeyboard);
    },
  },
  methods: {
    keyMonitor(event: KeyboardEvent) {
      event.preventDefault();

      // animate active
      this.$set(this.active, 'isActive', true);
      setTimeout(() => this.$set(this.active, 'isActive', false), 200);

      // set active and keydown
      let eventKey = event.key;
      if (event.location > 0) {
        if (event.location === 1) {
          eventKey = `Left ${event.key}`;
          this.$set(this.keyboardObject, eventKey, true);
        } else {
          eventKey = `Right ${event.key}`;
          this.$set(this.keyboardObject, eventKey, true);
        }
      } else {
        this.$set(this.keyboardObject, event.key, true);
      }
      this.$set(this.active, 'key', eventKey);

      if (this.active.audio) {
        const randomKeyaudio = `./audio/click-${
          Math.floor(Math.random() * 3) + 1
        }.mp3`;
        new Audio(randomKeyaudio).play();
      }
    },
    toggleAudio() {
      this.$set(this.active, 'audio', !this.active.audio);
    },
  },
});
</script>

<style scoped lang="scss">
@import './KeyboardDisplay.scss';
</style>
