<template>
  <div id="app">
    <img class="mk-logo" alt="Mechanical Keyboards Logo" src="./assets/logo.jpg" />
    <KeyboardDisplay msg="Vortexgear Race 3 - 75% Mechanical Keyboard" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import feather from 'vue-icon';
import KeyboardDisplay from './components/KeyboardDisplay.vue';

Vue.use(feather, 'v-icon');
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
}

body {
  background-color: --off-white;
  margin-top: 50px;
  font-family: Arial;
}

.mk-logo {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-bottom: 15px;
}

br {
  display: block;
  margin-top: -5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
