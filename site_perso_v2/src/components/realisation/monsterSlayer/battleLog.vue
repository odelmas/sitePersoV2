<template>
  <section id="log" class="container">
    <h2>Journal de combat</h2>
    <ul>
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

<style lang="scss" scoped>

@import "../../../variable.scss";
.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: $secondaire;
  border-radius: 1em;
  overflow: scroll;
}
#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
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