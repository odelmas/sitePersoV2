<template>  
<competence-view class="fullPage"></competence-view>
  <div class="fullPage onScreen" id="ancreCompetence">
    <the-animation-background
      text="Compétences"
      idPage="ancreCompetence"
      color="light"
    ></the-animation-background>
  </div>
</template>
<script>
import CompetenceView from '../components/competence/CompetenceView.vue'
export default {
    components: {
        CompetenceView
    },
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>

@import "../variable.scss";
.fullPage {
  height: 100vh;
  width: 100vw;
}
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
article {
  padding: 20px;
  margin: 20px;
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;

  div {
    //   flex-direction: column;
      flex-wrap: wrap;
    justify-content: space-around;
  }
}
p,
i {
  color: $secondaire;
  z-index: 5;
  font-size: 2em;
  margin: 10px;
}
h2 {
  font-size: 5em;
  margin: 40px 20px 20px 20px;
}
h3 {
  font-size: 3.5em;
  
  margin: 20px 20px 20px 20px;
}
h2,
h3 {
  color: $secondaire;
  text-align: center;
  background-color: transparent;
  z-index: 5;
}
</style>