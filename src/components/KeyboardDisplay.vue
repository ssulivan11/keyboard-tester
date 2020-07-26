<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="keyboard">
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
        <div class="key">Q</div>
        <div class="key">W</div>
        <div class="key">E</div>
        <div class="key">R</div>
        <div class="key">T</div>
        <div class="key">Y</div>
        <div class="key">U</div>
        <div class="key">I</div>
        <div class="key">O</div>
        <div class="key">P</div>
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
        <div class="key key--color-yellow">
          <v-icon name="arrow-up" />
        </div>
        <div class="key key--color-gray">End</div>
      </div>

      <div class="row" data-test="row-functional-keys">
        <div class="key key--color-red key--bottom-funct">Crtl</div>
        <div class="key key--bottom-funct key--symbols key--color-gray">alt <br />option</div>
        <div class="key key--bottom-funct key--symbols key--color-gray">
          <v-icon name="command" /><br />command
        </div>
        <div class="key key--spacebar"></div>
        <div class="key key--symbols key--color-gray"><v-icon name="command" /><br />command</div>
        <div class="key key--symbols key--color-gray">alt<br />option</div>
        <div class="key key--color-gray">Ctrl</div>
        <div class="key key--color-yellow">
          <v-icon name="arrow-left" />
        </div>
        <div class="key key--color-yellow">
          <v-icon name="arrow-down" />
        </div>
        <div class="key key--color-yellow">
          <v-icon name="arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'KeyboardDisplay',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.keyboard {
  width: 832px;
  height: 314px;
  margin: 0px auto;
  border: 3px solid var(--black);
  border-radius: 10px;
  background: var(--black);
}

.row {
  margin-top: 2px;
  overflow: hidden;
}

.key {
  width: 50px;
  height: 50px;
  float: left;
  cursor: pointer;
  background-color: var(--off-white);
  color: var(--black);
  line-height: 48px;
  text-align: center;
  margin-left: 2px;
  border-radius: 4px;
  &--symbols {
    line-height: 25px;
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
}
</style>
