<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="keyboard">
      <div class="keyboard__display">
        <div class="row" data-test="row-functional-keys">
          <div class="key key--color-red key--oneandhalf">
            Esc
          </div>
          <div class="key">F1</div>
          <div class="key">F2</div>
          <div class="key">F3</div>
          <div class="key">F4</div>
          <div class="key key--color-gray">F5</div>
          <div class="key key--color-gray">F6</div>
          <div class="key key--color-gray">F7</div>
          <div class="key key--color-gray">F8</div>
          <div class="key">F9</div>
          <div class="key">F10</div>
          <div class="key">F11</div>
          <div class="key">F12</div>
          <div class="key key--color-gray">Pn</div>
          <div class="key key--oneandhalf key--color-gray">
            Delete
          </div>
        </div>

        <div class="row" data-test="row-numeric-keys">
          <div class="key key--symbols">
            ~
            <br />
            `
          </div>
          <div class="key key--symbols">
            !
            <br />
            1
          </div>
          <div class="key key--symbols">
            @
            <br />
            2
          </div>
          <div class="key key--symbols">
            #
            <br />
            3
          </div>
          <div class="key key--symbols">
            $
            <br />
            4
          </div>
          <div class="key key--symbols">
            %
            <br />
            5
          </div>
          <div class="key key--symbols">
            ^
            <br />
            6
          </div>
          <div class="key key--symbols">
            &
            <br />
            7
          </div>
          <div class="key key--symbols">
            *
            <br />
            8
          </div>
          <div class="key key--symbols">
            (
            <br />
            9
          </div>
          <div class="key key--symbols">
            )
            <br />
            0
          </div>
          <div class="key key--symbols">
            _
            <br />
            -
          </div>
          <div class="key key--symbols">
            +
            <br />
            =
          </div>
          <div class="key key--delete key--color-gray">
            Backspace
          </div>
          <div class="key key--color-gray">Home</div>
        </div>

        <div class="row" data-test="row-one-alpha-keys">
          <div class="key key--oneandhalf key--color-gray">
            Tab
          </div>
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
            <br />
            [
          </div>
          <div class="key key--symbols">
            }
            <br />
            ]
          </div>
          <div class="key key--symbols key--oneandhalf">
            |
            <br />
            \
          </div>
          <div class="key key--color-gray">PgUp</div>
        </div>

        <div class="row" data-test="row-two-alpha-keys">
          <div class="key key--caps key--color-gray">
            Caps Lock
          </div>
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
            <br />
            ;
          </div>
          <div class="key key--symbols">
            "
            <br />
            '
          </div>
          <div class="key key--enter key--symbols key--color-gray">enter<br />return</div>
          <div class="key key--color-gray">PgDn</div>
        </div>

        <div class="row" data-test="row-three-alpha-keys">
          <div class="key key--shift-left key--color-green">
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
            <br />
            ,
          </div>
          <div class="key key--symbols">
            &lt;
            <br />
            .
          </div>
          <div class="key key--symbols">
            ?
            <br />
            /
          </div>
          <div class="key key--oneandhalf key--color-green">
            Shift
          </div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.up }">
            <v-icon name="arrow-up" />
          </div>
          <div class="key key--color-gray">End</div>
        </div>

        <div class="row" data-test="row-functional-keys">
          <div class="key key--color-red key--bottom-funct">Crtl</div>
          <div class="key key--bottom-funct key--symbols key--color-gray">alt <br />option</div>
          <div class="key key--bottom-funct key--symbols key--color-gray">
            <v-icon name="command" />command
          </div>
          <div class="key key--spacebar"></div>
          <div class="key key--symbols key--color-gray"><v-icon name="command" />cmd</div>
          <div class="key key--symbols key--color-gray">alt<br />option</div>
          <div class="key key--color-gray">Ctrl</div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.left }">
            <v-icon name="arrow-left" />
          </div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.down }">
            <v-icon name="arrow-down" />
          </div>
          <div class="key key--color-yellow" :class="{ active: this.keyboardObject.right }">
            <v-icon name="arrow-right" />
          </div>
        </div>
      </div>
      <div class="keyboard__input">
        <input
          type="text"
          v-on:keyup="keyMonitor"
          v-on:keyup.q="keyDown('q')"
          v-on:keyup.w="keyDown('w')"
          v-on:keyup.e="keyDown('e')"
          v-on:keyup.r="keyDown('r')"
          v-on:keyup.t="keyDown('t')"
          v-on:keyup.y="keyDown('y')"
          v-on:keyup.u="keyDown('u')"
          v-on:keyup.i="keyDown('i')"
          v-on:keyup.o="keyDown('o')"
          v-on:keyup.p="keyDown('p')"
          v-on:keyup.up="keyDown('up')"
          v-on:keyup.down="keyDown('down')"
          v-on:keyup.left="keyDown('left')"
          v-on:keyup.right="keyDown('right')"
        />
      </div>
    </div>

    <h2>{{ active.key }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'KeyboardDisplay',
  props: {
    msg: String,
  },
  data: () => ({
    active: { key: '-' },
    keyboardObject: {
      q: false,
      w: false,
      e: false,
      r: false,
      t: false,
      y: false,
      u: false,
      i: false,
      o: false,
      p: false,
      a: false,
      s: false,
      d: false,
      f: false,
      g: false,
      h: false,
      j: false,
      k: false,
      l: false,
      up: false,
      down: false,
      right: false,
      left: false,
    },
  }),
  methods: {
    keyDown(keyPressed: string) {
      this.$set(this.keyboardObject, keyPressed, true);
    },
    keyMonitor(event: KeyboardEvent) {
      event.preventDefault();
      this.$set(this.active, 'key', event.key);
    },
  },
});
</script>

<style scoped lang="scss">
.active {
  color: white !important;
  background: black !important;
}

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
}
</style>
