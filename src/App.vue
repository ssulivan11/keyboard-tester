<template>
  <div id="app">
    <img class="mk-logo" alt="Mechanical Keyboards Logo" src="./assets/logo.jpg" />
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
  --activated: #ccc;
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
}

.mk-logo {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 5px solid var(--off-white);
}

#app {
  text-align: center;
  margin-top: -110px;
}
</style>
