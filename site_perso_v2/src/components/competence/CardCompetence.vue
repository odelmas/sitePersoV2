<template>
  <article>
    <h3>{{ texteCardCompetence }}</h3>
    <div class="wrapper">
      <item-competence
        v-for="competence in dataCompetence"
        :competence="competence"
        :key="competence.name"
      ></item-competence>
    </div>
  </article>
</template>

<script>
import ItemCompetence from "./ItemCompetence.vue";
import competenceJson from "./competence.json";

export default {
  components: {
    ItemCompetence,
  },
  props: ["texteCardCompetence"],
  setup(props) {
    let dataCompetence = " ";
    if (props.texteCardCompetence == "FrontEnd") {
      dataCompetence = competenceJson.frontend;
    } else if (props.texteCardCompetence == "BackEnd") {
      dataCompetence = competenceJson.backend;
    }
    return { dataCompetence };
  },
};
</script>

<style lang="scss" scoped>
@import "../../variable.scss";
article {
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    background-color: transparent;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    @media (min-width: 769px ){
      height: 100%;
      flex-direction: column;
      flex-wrap:wrap;
      justify-content:space-between;
    }
  }
  padding: 20px;
  margin: 20px;
  border-radius: 1em;
  background-color: $bgOpacity;
  z-index: 5;
}
h3 {
  @media (max-width: 375px) {
    font-size: 1em;
  }
  font-size: 1.5em;
  @media (min-width: 768px) {
    font-size: 6vh;
  }
  color: $secondaire;
  text-align: center;
  background-color: transparent;
  z-index: 5;
  margin: 20px 20px 20px 20px;
}
</style>