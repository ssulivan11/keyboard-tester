<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="keyboard">
      <div class="keyboard__display">
        <div class="row" data-test="row-functional-keys">
          <div
            v-for="keyboardItem in keyboardRowFunctionalArr"
            :key="keyboardItem.key"
            :class="[keyboardItem.classes, keyboardObject[keyboardItem.key] ? 'key--active' : '']"
          >
            <span v-html="keyboardItem.key" />
            <span class="key__sub-key" v-if="keyboardItem.subKey" v-html="keyboardItem.subKey" />
          </div>
        </div>

        <div class="row" data-test="row-numeric-keys">
          <div
            v-for="keyboardItem in keyboardRowNumericArr"
            :key="keyboardItem.key"
            :class="[keyboardItem.classes, keyboardObject[keyboardItem.key] ? 'key--active' : '']"
          >
            <span v-html="keyboardItem.key" />
            <span class="key__sub-key" v-if="keyboardItem.subKey" v-html="keyboardItem.subKey" />
          </div>
        </div>

        <div class="row" data-test="row-one-alpha-keys">
          <div class="key key--oneandhalf key--color-gray">Tab</div>
          <div class="key" :class="{ active: this.keyboardObject.q }">Q</div>
          <div class="key" :class="{ active: this.keyboardObject.w }">W</div>
          <div class="key" :class="{ active: this.keyboardObject.e }">E</div>
          <div class="key" :class="{ active: this.keyboardObject.r }">R</div>
          <div class="key" :class="{ active: this.keyboardObject.t }">T</div>
          <div class="key" :class="{ active: this.keyboardObject.y }">Y</div>
          <div class="key" :class="{ active: this.keyboardObject.u }">U</div>
          <div class="key" :class="{ active: this.keyboardObject.i }">I</div>
          <div class="key" :class="{ active: this.keyboardObject.o }">O</div>
          <div class="key" :class="{ active: this.keyboardObject.p }">P</div>
          <div class="key key--symbols">
            {
            <br />[
          </div>
          <div class="key key--symbols">
            }
            <br />]
          </div>
          <div class="key key--symbols key--oneandhalf">
            |
            <br />\
          </div>
          <div class="key key--color-gray">PgUp</div>
        </div>

        <div class="row" data-test="row-two-alpha-keys">
          <div class="key key--caps key--color-gray">Caps Lock</div>
          <div class="key">A</div>
          <div class="key">S</div>
          <div class="key">D</div>
          <div class="key">F</div>
          <div class="key">G</div>
          <div class="key">H</div>
          <div class="key">J</div>
          <div class="key">K</div>
          <div class="key">L</div>
          <div class="key key--symbols">
            :
            <br />;
          </div>
          <div class="key key--symbols">
            "
            <br />'
          </div>
          <div class="key key--enter key--symbols key--color-gray">
            enter
            <br />return
          </div>
          <div class="key key--color-gray">PgDn</div>
        </div>

        <div class="row" data-test="row-three-alpha-keys">
          <div
            class="key key--shift-left key--color-green"
            :class="{ active: this.keyboardObject['Left Shift'] }"
          >
            Shift
          </div>
          <div class="key">Z</div>
          <div class="key">X</div>
          <div class="key">C</div>
          <div class="key">V</div>
          <div class="key">B</div>
          <div class="key">N</div>
          <div class="key">M</div>
          <div class="key key--symbols">
            >
            <br />,
          </div>
          <div class="key key--symbols">
            &lt;
            <br />.
          </div>
          <div class="key key--symbols">
            ?
            <br />/
          </div>
          <div
            class="key key--oneandhalf key--color-green"
            :class="{ active: this.keyboardObject['Right Shift'] }"
          >
            Shift
          </div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.ArrowUp }">
            <v-icon name="arrow-up" />
          </div>
          <div class="key key--color-gray">End</div>
        </div>

        <div class="row" data-test="row-functional-keys">
          <div class="key key--color-red key--bottom-funct">Crtl</div>
          <div class="key key--bottom-funct key--symbols key--color-gray">
            alt
            <br />option
          </div>
          <div class="key key--bottom-funct key--symbols key--color-gray">
            <v-icon name="command" />command
          </div>
          <div class="key key--spacebar"></div>
          <div class="key key--symbols key--color-gray"><v-icon name="command" />cmd</div>
          <div class="key key--symbols key--color-gray">
            alt
            <br />option
          </div>
          <div class="key key--color-gray">Ctrl</div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.ArrowLeft }">
            <v-icon name="arrow-left" />
          </div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.ArrowDown }">
            <v-icon name="arrow-down" />
          </div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.ArrowRight }">
            <v-icon name="arrow-right" />
          </div>
        </div>
      </div>
      <div class="keyboard__input">
        <input type="text" v-on:keyup="keyMonitor" />
      </div>
    </div>
    <h2 class="keyboard__active-key" :class="{ 'active-key--animate': active.isActive }">
      {{ active.key }}
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { keyboardObject, keyboardRowFunctionalArr, keyboardRowNumericArr } from './helperKeys';

export default Vue.extend({
  name: 'KeyboardDisplay',
  props: {
    msg: String,
  },
  data: () => ({
    active: { key: '-', isActive: false },
    keyboardObject,
    keyboardRowFunctionalArr,
    keyboardRowNumericArr,
  }),
  methods: {
    keyMonitor(event: KeyboardEvent) {
      event.preventDefault();
      // animate active
      this.$set(this.active, 'isActive', true);
      setTimeout(() => this.$set(this.active, 'isActive', false), 200);

      // set active and keydown
      this.$set(this.keyboardObject, event.key, true);
      if (event.location > 0) {
        if (event.location === 1) this.$set(this.active, 'key', `Left ${event.key}`);
        else this.$set(this.active, 'key', `Right ${event.key}`);
      } else {
        this.$set(this.active, 'key', event.key);
      }
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

  &__active-key {
    transition: all 0.2s ease-in;
    transform: scale(0.75);
    &--animate {
      transform: scale(1.5);
    }
  }
}

.row {
  margin-top: 2px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.key {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--off-white);
  color: var(--black);
  flex-direction: column;
  text-align: center;
  margin-left: 2px;
  border-radius: 4px;
  overflow: hidden;
  &--active {
    color: white !important;
    background: black !important;
  }
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
  }
  &--color-green {
    background: var(--green);
  }
  &--color-yellow {
    background: var(--yellow);
  }
  &--color-red {
    background: var(--red);
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
}
</style>
