<template>
  <section id="Dragon" class="container">
    <h2>Dragon</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="DragonBarStyles"></div>
    </div>
  </section>
  <section class="container" id="Joueur">
    <h2>Joueur</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="JoueurBarStyles"></div>
    </div>
  </section>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let DragonHealth = computed(function() {return store.getters["monsterSlayer/DragonHealth"]});
    let JoueurHealth = computed(function() {return store.getters["monsterSlayer/JoueurHealth"]});

    const DragonBarStyles = computed(function () {
      if (DragonHealth.value < 10) {
        return { width: "0%" };
      }
      return { width: DragonHealth.value + "%" };
    });
    const JoueurBarStyles = computed(function () {
      if (JoueurHealth.value < 10) {
        return { width: "0%" };
      }
      return { width: JoueurHealth.value + "%" };
    });

    return { DragonBarStyles, JoueurBarStyles };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../variable.scss";

.healthbar__value {
  background-color: #008b62;
  width: 100%;
  height: 100%;
  border-radius: 2em;
}
.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid $primaire;
  margin: 1rem 0;
  background: $tertiaire;
  border-radius: 2em;
}
h2 {
  margin: 10px;
}
</style>