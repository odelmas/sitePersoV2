<template>
  <article>
    <h3>{{ texteCardCompetence }}</h3>
    <div>
      <item-competence v-for="competence in dataCompetence" :competence="competence" :key="competence.name"></item-competence>
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
      let dataCompetence = " "
     if (props.texteCardCompetence == "FrontEnd") {
         dataCompetence= competenceJson.frontend
     } else if (props.texteCardCompetence == "BackEnd"){
         dataCompetence = competenceJson.backend
     }
    console.log(dataCompetence);
    return {dataCompetence}
  },
};
</script>

<style lang="scss" scoped>
@import "../../variable.scss";
article {
  padding: 20px;
  margin: 20px;
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;
}
h3 {
  font-size: 3.5em;
  color: $secondaire;
  text-align: center;
  background-color: transparent;
  z-index: 5;
  margin: 20px 20px 20px 20px;
}
</style>