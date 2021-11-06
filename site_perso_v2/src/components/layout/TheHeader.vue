<template>
<button
    
    id="menu-toggle"
    class="btn-toggle"
    :class="menuToggle ? 'open' : 'close'"
    @click="changeClassSpan"
  >
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </button>

</template>
<script>
import { ref } from "vue";

export default {
  props: ["zindex"],
  setup(_, context) {
    let menuToggle = ref(false);

    function changeClassSpan() {
      menuToggle.value = !menuToggle.value;
      context.emit("menu-toggle", menuToggle);

      const arrayLine = document.querySelectorAll(".line");
      for (let i = 0; i < arrayLine.length; i++) {
        if (menuToggle.value) {
          arrayLine[i].classList.remove("closeLine" + i);
          arrayLine[i].classList.add("openLine" + i);
        } else {
          arrayLine[i].classList.add("closeLine" + i);
          arrayLine[i].classList.remove("openLine" + i);
        }
      }
    }

    return { menuToggle, changeClassSpan };
  },
};
</script>

<style lang="scss" scoped>

@import "./animationMenuBurger.scss";

.btn-toggle {
  z-index: 100;
  position: fixed;
  top: 3%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 12px;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  transform: translateZ(0);
  transition: transform 0.1s ease-out;

  &:active {
    transform: translateY(4px);
  }

  &:focus .line:after {
    background-color: $toggle-line-focus-color;
  }
}

.line {
  display: block;
  width: $toggle-size;
  padding: $toggle-line-size/2;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: $toggle-line-size;
    background-color: $toggle-line-color;
    border-radius: 2px;
    transform: translateZ(0) rotate(0);
    transition: background-color 0.2s ease-out;
  }
}
</style>

