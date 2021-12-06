<template>
  <section class="container">
    <h2>Fin de partie</h2>
    <h3 v-if="winner === 'Dragon'">Tu as perdu !</h3>
    <h3 v-else-if="winner === 'Joueur'">Tu as gagné !</h3>
    <h3 v-else>Egalité !</h3>
    <button @click="startNewGame">Nouvelle Partie</button>
  </section>
</template>
<script>
import {useStore} from 'vuex'
export default {
  props: ["winner"],
  setup() {
      const store = useStore();
    function startNewGame() {
      store.dispatch("monsterSlayer/updateDragonHealth", 100);
      store.dispatch("monsterSlayer/updateJoueurHealth", 100);
      store.dispatch("monsterSlayer/updateWinner", null);
      store.dispatch("monsterSlayer/updateCurrentRound", 0);
      store.dispatch("monsterSlayer/resetLogMessages", []);
    }
    return {startNewGame}
  },
};
</script>

<style lang="scss" scoped>
@import "../../../variable.scss";


h3 {
  border: solid 2px $primaire;
  padding: 5px;
  border-radius: 1em;
  margin: 5px;
}
h2 {
  margin: 10px;
}
button {
  color: $primaire;
  font: inherit;
  border: 1px solid $primaire;
  background-color: $bgOpacity;
  padding: 1rem;
  border-radius: 1em;
  margin: 10px 10px 10px 10px;
  width: 10rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px $bgOpacity;
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: $bgOpacityLight;
  border-color: $bgOpacityLight;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}
</style>