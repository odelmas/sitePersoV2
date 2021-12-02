<template>
  <section>
    <button @click="attackDragon">Attaque</button>
    <button :disabled="mayUseSpecialAttack" @click="specialAttackDragon">
      Spéciale
    </button>
    <button @click="healJoueur">Soin</button>
    <button @click="surrender">Capituler</button>
  </section>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    let DragonHealth = computed(function () {
      return store.getters["monsterSlayer/DragonHealth"];
    });
    let JoueurHealth = computed(function () {
      return store.getters["monsterSlayer/JoueurHealth"];
    });

    function getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function attackDragon() {
      store.dispatch("monsterSlayer/incrementCurrentRound");
      const attackValue = getRandomValue(5, 12);
      let newDragonHealth = DragonHealth.value - attackValue;
      store.dispatch("monsterSlayer/updateDragonHealth", newDragonHealth);
      // addLogMessage("Joueur", "attack", attackValue);
      attackJoueur();
    }
    function attackJoueur() {
      const attackValue = getRandomValue(8, 15);
      let newJoueurHealth = JoueurHealth.value - attackValue;
      store.dispatch("monsterSlayer/updateJoueurHealth", newJoueurHealth);
      // addLogMessage("Joueur", "attack", attackValue);
    }
    function specialAttackDragon() {
      store.dispatch("monsterSlayer/incrementCurrentRound");

      const attackValue = getRandomValue(10, 25);
      let newDragonHealth = DragonHealth.value - attackValue;
      store.dispatch("monsterSlayer/updateDragonHealth", newDragonHealth);
      // addLogMessage("Joueur", "special-attack", attackValue);
      attackJoueur();
    }
    function healJoueur() {
      store.dispatch("monsterSlayer/incrementCurrentRound");
      const healValue = getRandomValue(8, 20);
      if (JoueurHealth.value + healValue > 100) {
        let newJoueurHealth = 100;
        store.dispatch("monsterSlayer/updateJoueurHealth", newJoueurHealth);
      } else {
        let newJoueurHealth = JoueurHealth.value + healValue;
        store.dispatch("monsterSlayer/updateJoueurHealth", newJoueurHealth);
      }

      // this.addLogMessage("Joueur", "heal", healValue);
      attackJoueur();
    }
    function surrender() {
      store.dispatch("monsterSlayer/updateWinner", "Dragon");
    }
    return { attackDragon, healJoueur, specialAttackDragon, surrender };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../variable.scss";

button {
  color: $primaire;
  font: inherit;
  border: 1px solid $secondaire;
  background-color: $secondaire;
  padding: 1rem;
  border-radius: 12px;
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

button:disabled {
  background-color: rgba(102, 11, 11, 0.6);
  border-color: rgba(102, 11, 11, 0.6);
  box-shadow: none;
  color: rgb(179, 179, 179);
  cursor: not-allowed;
}
</style>