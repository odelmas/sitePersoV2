<template>
  <section>
    <h2>Compétences</h2>
    <div>
      <card-competence texteCardCompetence="FrontEnd"></card-competence>
      <card-competence texteCardCompetence="BackEnd"></card-competence>
    </div>
  </section>
</template>
<script>
import CardCompetence from './CardCompetence.vue'
export default {
    components: {
        CardCompetence
    },
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
@import "../../variable.scss";
section {
  div {
    z-index: 5;
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }
  pointer-events: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 5em;
  margin: 40px 20px 20px 20px;
  color: $secondaire;
  text-align: center;
  background-color: transparent;
  z-index: 5;
}
</style>