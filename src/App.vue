<template>
  <div id="app">
    <header class="header">
      <img class="header__logo" alt="Mechanical Keyboards Logo" src="./assets/logo.jpg" />
    </header>
    <KeyboardDisplay keyboardType="Vortexgear Race 3 - 75% Mechanical Keyboard" />
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
});
</script>

<style lang="scss">
:root {
  --green: #63ab62;
  --yellow: #ffe303;
  --red: #cd2626;
  --gray: #dddddd;
  --off-white: #fffff4;
  --black: #111111;
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

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
}

.header {
  width: 100%;
  height: 60px;
  background-color: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  &__logo {
    width: 46px;
    height: 46px;
    border-radius: 100%;
    border: 2px solid var(--off-white);
    margin-top: 5px;
  }
}

#app {
  text-align: center;
}
</style>
