<template>
  <div class="fullPage scrollSnap">
    <div class="fullPage onScreen" id="ancreRealisation">
      <the-animation-background
        text="Réalisations"
        idPage="ancreRealisation"
        color="dark"
      ></the-animation-background>
    </div>

    <monster-slayer></monster-slayer>
    <mes-realisations></mes-realisations>
  </div>
</template>
<script>
import mesRealisations from "../components/realisation/mesRealisations.vue";
import monsterSlayer from "../components/realisation/monsterSlayer/monsterSlayer.vue";

export default {
  components: {
    monsterSlayer,
    mesRealisations,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "../variable.scss";

#ancreRealisation {
  position: absolute;
}
</style>