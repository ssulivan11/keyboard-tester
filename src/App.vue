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
import KeyboardDisplay from './components/KeyboardDisplay.vue';

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
    ],
  }),
});
</script>

<style lang="scss">
:root {
  --green: #63ab62;
  --yellow: #ffe303;
  --red: #cd2626;
  --gray: #dddddd;
  --off-white: #fffff4;
  --black: #222;
  --background: #444444;
  --text: #fffff4;
  --activated: #228b22;
  --active: #7cfc00;
  --outline: #9ecaed;
}

body {
  background-color: var(--background);
  font-family: Arial;
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

h2 {
  font-size: 1.25rem;
}

.header {
  width: 100%;
  height: 65px;
  background-color: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__logo {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid var(--off-white);
    margin-right: 20px;
  }
  &__select {
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--off-white);
    font-size: 1.25rem;
    color: var(--text);
  }
}

#app {
  text-align: center;
}
</style>
