<template>
  <div id="app">
    <header class="header">
      <img class="header__logo" alt="Mechanical Keyboards Logo" src="./assets/logo.jpg" />
      <select class="header__select" v-model="selected">
        <option
          v-for="option in options"
          v-bind:value="option.value"
          v-bind:key="option.value"
        >{{ option.text }}</option>
      </select>
    </header>

    <KeyboardDisplay :keyboardType="selected" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Feather from 'vue-icon';
import KeyboardDisplay from './components/KeyboardDisplay/KeyboardDisplay.vue';

Vue.use(Feather, 'v-icon');

export default Vue.extend({
  name: 'App',
  components: {
    KeyboardDisplay,
  },
  data: () => ({
    selected: 'vortex',
    options: [
      { text: 'Vortex Race 3', value: 'vortex' },
      { text: 'Apple Magic Keyboard', value: 'apple' },
      { text: 'Basic 104', value: '104' },
    ],
  }),
});
</script>

<style lang="scss">
@import './App.scss';
</style>
