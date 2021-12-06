<template>
  <section id="log" class="container" :class="{gameOverLog: winner}">
    <h2>Journal de combat</h2>
    <ul >
      <li v-for="logMessage in logMessages" :key="logMessage">
        <span
          :class="{
            'log--Joueur': logMessage.actionBy === 'Joueur',
            'log--Dragon': logMessage.actionBy == 'Dragon',
          }"
        >
          {{ logMessage.actionBy === "Joueur" ? "Joueur" : "Dragon" }}</span
        >
        <span v-if="logMessage.actionType === 'heal'">
          se soigne pour<span class="log--heal">{{
            logMessage.actionValue
          }}</span></span
        >
        <span v-else>
          attaque et fait 
          <span class="log--damage"> {{ logMessage.actionValue }}</span>
        </span>
      </li>
    </ul>
  </section>
</template>
<script>
import { computed } from "vue";
import {useStore} from "vuex"
export default {
  setup() {
    let winner = computed(function () {
      return store.getters["monsterSlayer/winner"]
    })
    const store = useStore();
    let logMessages = computed(function () {
      return store.getters["monsterSlayer/logMessages"];
    });
    return { logMessages, winner };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../variable.scss";
#log {
  height: 30%;
}
.gameOverLog {
  height: 50% !important;
}
#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 100%;
  overflow: scroll;
}

#log li {
  margin: 0.5rem 0;
}

.log--Joueur {
  color: #7700ff;
}

.log--Dragon {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>