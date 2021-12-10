<template>
  <h2>Mes Realisations</h2>
  <div class="containerRealisation">
    <titre-realisations></titre-realisations>
    <div class="containerMockupTexte">
      <texte-realisations></texte-realisations>
      <mockup-realisations></mockup-realisations>
    </div>
  </div>
</template>
<script>
import texteRealisations from "./texteRealisations.vue";
import titreRealisations from "./titreRealisations.vue";
import mockupRealisations from "./mockupRealisations.vue";
export default {
  components: {
    texteRealisations,
    titreRealisations,
    mockupRealisations,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../../variable.scss";
h2 {
  @media (max-width: 375px) {
    font-size: 1.5em;
  }
  font-size: 1.7em;
  margin: 0.5rem;
  @media (min-width: 768px) {
    font-size: 6vh;

    top: -90%;
  }
  @media (min-width: 1000px) {
    font-size: 8vh;
    margin: 2vw;
  }
  margin: 40px 20px 20px 20px;
  position: relative;
  top: -87%;
  color: $primaire;
  text-align: center;
  background-color: transparent;
  z-index: 5;
}
.containerRealisation {
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  left: 5%;
  top: -88%;
  width: 90vw;
  height: 75vh;
  z-index: 4;
  color: $primaire;
  padding: 0.5em;
  pointer-events: none;
}
.containerMockupTexte {
  position: relative;
  top: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 80%;


  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: auto;
  }
}
</style>