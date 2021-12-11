<template>  
<competence-view class="fullPage scrollSnap"></competence-view>
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
section {
  pointer-events: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>