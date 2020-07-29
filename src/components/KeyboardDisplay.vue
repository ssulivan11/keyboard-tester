<template>
  <div>
    <h1>{{ keyboardType }}</h1>
    <div class="keyboard">
      <div class="keyboard__display">
        <div
          class="row"
          data-test="row-functional-keys"
          v-for="keyboardRowArr in vortexKeyboard"
          :key="keyboardRowArr.key"
        >
          <KeyDisplay :arr="keyboardRowArr" :activeKey="active.key" :wasPressed="active.isActive" />
        </div>
      </div>
      <div class="keyboard__input">
        <input type="text" v-on:keyup="keyMonitor" />
      </div>
    </div>
    <h2
      class="active-key"
      :class="{ 'active-key--animate': active.isActive }"
    >{{ active.key === " " ? "space" : active.key }}</h2>

    <button class="audio-button" type="button" v-on:click="toggleAudio">
      <v-icon :name="this.active.audio ? 'volume-2' : 'volume-x'" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import KeyDisplay from './KeyDisplay.vue';

import { keyboardObject, vortexKeyboard } from './helperKeys';

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
    keyboardObject,
    vortexKeyboard,
    page: { hasLoaded: false },
  }),
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
        new Audio(
          `./audio/click-${Math.floor(Math.random() * 3) + 1}.mp3`,
        ).play();
      }
    },
    toggleAudio() {
      this.$set(this.active, 'audio', !this.active.audio);
    },
  },
});
</script>

<style scoped lang="scss">
.keyboard {
  position: relative;

  &__display {
    width: 834px;
    height: 314px;
    margin: 0px auto;
    border: 3px solid var(--black);
    border-radius: 10px;
    background: var(--black);
    display: flex;
    flex-direction: column;
    position: relative;
    pointer-events: none;
    z-index: 1;
  }

  &__input input {
    width: 834px;
    height: 314px;
    margin: 0px auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0;
    border-radius: 10px;
    transition: all 0.25s ease-in-out;

    &:focus {
      outline: none;
      border-color: var(--outline);
      box-shadow: 0 0 20px var(--outline);
    }
  }
}

.active-key {
  transition: all 0.2s ease-out;
  transform: scale(1);
  &--animate {
    transform: scale(2.5);
  }
}

.row {
  margin-top: 1px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.audio-button {
  background: none;
  border: none;
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 15px;
  right: 15px;
  opacity: 0.25;
  color: var(--off-white);
}
</style>
