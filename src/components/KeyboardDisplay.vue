<template>
  <div>
    <h1>{{ keyboardType }}</h1>
    <div class="keyboard">
      <div class="keyboard__display">
        <div class="row" data-test="row-functional-keys">
          <KeyDisplay :arr="keyboardRowFunctionalArr" />
        </div>

        <div class="row" data-test="row-numeric-keys">
          <KeyDisplay :arr="keyboardRowNumericArr" />
        </div>

        <div class="row" data-test="row-one-alpha-keys">
          <KeyDisplay :arr="keyboardRowAlphaOneArr" />
        </div>

        <div class="row" data-test="row-two-alpha-keys">
          <KeyDisplay :arr="keyboardRowAlphaTwoArr" />
        </div>

        <div class="row" data-test="row-three-alpha-keys">
          <KeyDisplay :arr="keyboardRowAlphaThreeArr" />
        </div>

        <div class="row" data-test="row-control-keys">
          <KeyDisplay :arr="keyboardRowControlArr" />
        </div>
      </div>
      <div class="keyboard__input">
        <input type="text" v-on:keyup="keyMonitor" />
      </div>
    </div>
    <h2 class="active-key" :class="{ 'active-key--animate': active.isActive }">{{ active.key }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import KeyDisplay from './KeyDisplay.vue';

import {
  keyboardObject,
  keyboardRowFunctionalArr,
  keyboardRowNumericArr,
  keyboardRowAlphaOneArr,
  keyboardRowAlphaTwoArr,
  keyboardRowAlphaThreeArr,
  keyboardRowControlArr,
} from './helperKeys';

export default Vue.extend({
  name: 'KeyboardDisplay',
  props: {
    keyboardType: String,
  },
  components: {
    KeyDisplay,
  },
  data: () => ({
    active: { key: '-', isActive: false },
    keyboardObject,
    keyboardRowFunctionalArr,
    keyboardRowNumericArr,
    keyboardRowAlphaOneArr,
    keyboardRowAlphaTwoArr,
    keyboardRowAlphaThreeArr,
    keyboardRowControlArr,
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

      const audio = new Audio(
        `./audio/click-${Math.floor(Math.random() * 3) + 1}.mp3`,
      );
      audio.play();
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
      border-color: #9ecaed;
      box-shadow: 0 0 20px #9ecaed;
    }
  }
}

.active-key {
  transition: all 0.2s ease-in;
  transform: scale(0.75);
  &--animate {
    transform: scale(1.5);
  }
}

.row {
  margin-top: 1px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
