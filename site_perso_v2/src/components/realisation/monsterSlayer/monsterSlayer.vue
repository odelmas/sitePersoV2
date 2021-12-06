<template>
  <div class="toggleMonsterSlayer" id="test">
    <button @click="toggleMonsterSlayer">
      <transition name="fade" mode="out-in">
        <i class="far fa-caret-square-left" v-if="monsterSlayerOpen"></i>
        <i class="far fa-caret-square-down" v-else></i
      ></transition>
    </button>
  </div>
  <aside
    :class="monsterSlayerOpen ? 'openGame' : 'closeGame'"
    class="monsterSlayerContainer"
  >
    <h2>Mini Jeu : La Chasse aux Dragons</h2>
    <healthbar v-if="!winner"></healthbar>
    <fin-de-partie class="container" v-if="winner" :winner="winner">
    </fin-de-partie>
    <action-possible id="controls" v-else> </action-possible>
    <battle-log v-if="battleLogOnScreen" ></battle-log>
  </aside>
</template>

<script>
import finDePartie from "./gameOver.vue";
import actionPossible from "./actionPossible.vue";
import healthbar from "./healthBar.vue";
import battleLog from "./battleLog.vue";
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: { finDePartie, actionPossible, healthbar, battleLog },
  setup() {
    const store = useStore();
    let winner = computed(function () {
      return store.getters["monsterSlayer/winner"];
    });

    let DragonHealth = computed(function () {
      return store.getters["monsterSlayer/DragonHealth"];
    });
    let JoueurHealth = computed(function () {
      return store.getters["monsterSlayer/JoueurHealth"];
    });

    let monsterSlayerOpen = ref(false);
    let battleLogOnScreen = ref(false);
    if (window.innerWidth < 600) {
      battleLogOnScreen.value = false;
    } else {
      battleLogOnScreen.value = true;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        battleLogOnScreen.value = false;
      } else {
        battleLogOnScreen.value = true;
      }
    });
    watch(JoueurHealth, function JoueurHealth(value) {
      if (JoueurHealth.value <= 10) {
        store.dispatch("monsterSlayer/updateWinner", "egalite")
      } else if (value < 10) {
        store.dispatch("monsterSlayer/updateWinner", "Dragon")
      }
    });
    watch(DragonHealth, function DragonHealth(value) {
      if (DragonHealth.value <= 10) {
        store.dispatch("monsterSlayer/updateWinner", "egalite")
      } else if (value < 10) {
        store.dispatch("monsterSlayer/updateWinner", "Joueur")
      }
    });
    onMounted(() => {});
    function toggleMonsterSlayer() {
      monsterSlayerOpen.value = !monsterSlayerOpen.value;
      return monsterSlayerOpen.value;
    }
    return {
      toggleMonsterSlayer,
      monsterSlayerOpen,
      winner,
      battleLogOnScreen
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../variable.scss";
h2 {
  border: solid 1px;
  background-color: $secondaire;
  border-radius: 1em;
  padding: 10px;
  text-align: center;
  margin: 10px;
}
#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.monsterSlayerContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 100%;
  top: 3%;
  max-width: 400px;
  width: 60%;
  height: 90vh;
  z-index: 5;
  background-color: $bgOpacityLight;
  color: $primaire;
  border-radius: 1em;
  padding: 1em;
}
.openGame {
  transform: translateX(-120%);
  transition: 1s ease;
}
.closeGame {
  transform: translateX(100%);
  transition: 1s ease;
}
.toggleMonsterSlayer {
  position: absolute;
  margin-top: 20px;
  margin-left: -50px;
  left: 100%;
  button {
    font-size: 3em;
    color: $primaire;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>