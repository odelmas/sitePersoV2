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
import CardCompetence from "./CardCompetence.vue";
export default {
  components: {
    CardCompetence,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../../variable.scss";
section {
  div {
    z-index: 5;
    display: flex;
    @media (max-width: 768px) {
      padding: 10px;
      border-radius: 1em;
      background-color: $bgOpacity;
    }
    justify-content: space-around;
    margin: 20px;
  }
  pointer-events: none;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  @media (max-width: 375px) {
    font-size: 1.5em;
  }
  font-size: 2em;
  margin: 0.5rem;
  @media (min-width: 768px) {
    font-size: 8vh;
    margin: 2vw;
  }
  margin: 40px 20px 20px 20px;
  color: $secondaire;
  text-align: center;
  background-color: transparent;
  z-index: 5;
}
</style>