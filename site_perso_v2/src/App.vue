<template>
  <the-header @menu-toggle="changeMenuToggle"></the-header>
  <the-menu  :isActive="menuToggle" ></the-menu>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheMenu from "./page/TheMenu.vue";
import { ref } from "vue";
export default {
  components: {
    TheHeader,
    TheMenu,
  },
  setup() {
    let  animateOff = ref(true)
    let menuToggle = ref(false);
    function changeMenuToggle() {
      menuToggle.value = !menuToggle.value;

    }
    return { menuToggle, changeMenuToggle, animateOff };
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
</style>
