<template>
  <div class="fullPage">
    <div class="fullPage onScreen" id="ancreRealisation">
      <the-animation-background
        text="Réalisations"
        idPage="ancreRealisation"
        color="dark"
      ></the-animation-background>
    </div>
    <monster-slayer ></monster-slayer>
  </div>
</template>
<script>
import monsterSlayer from "../components/realisation/monsterSlayer/monsterSlayer.vue";
export default {
  components: { monsterSlayer },
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "../variable.scss";

#ancreRealisation {
  position: absolute;
}
</style>