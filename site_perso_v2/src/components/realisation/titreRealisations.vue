<template>
  <div class="containerTitreRealisation">
    <i v-if="battleLogOnScreen" class="fas fa-chevron-left"></i>

    <i v-if="!battleLogOnScreen" class="fas fa-chevron-up"></i>

    <ul>
      <li>Marina Hantz</li>
      <li>Orinoco</li>
      <li>Reservia</li>
      <li>Encore Un Autre</li>
      <li>Marina Hantz</li>
      <li>Orinoco</li>
      <li>Reservia</li>
      <li>Encore Un Autre</li>
      <li>Marina Hantz</li>
      <li>Orinoco</li>
      <li>Reservia</li>
      <li>Encore Un Autre</li>
      <li>Marina Hantz</li>
      <li>Orinoco</li>
      <li>Reservia</li>
      <li>Encore Un Autre</li>
      <li>Marina Hantz</li>
      <li>Orinoco</li>
      <li>Reservia</li>
      <li>Encore Un Autre</li>
      <li>Marina Hantz</li>
      <li>Orinoco</li>
      <li>Reservia</li>
      <li>Encore Un Autre</li>
      <li>Marina Hantz</li>
      <li>Orinoco</li>
      <li>Reservia</li>
      <li>Encore Un Autre</li>
    </ul>

    <i v-if="battleLogOnScreen" class="fas fa-chevron-right"></i>

    <i v-if="!battleLogOnScreen" class="fas fa-chevron-down"></i>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let battleLogOnScreen = ref(false);
    if (window.innerWidth > 767) {
      battleLogOnScreen.value = false;
    } else {
      battleLogOnScreen.value = true;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        battleLogOnScreen.value = false;
      } else {
        battleLogOnScreen.value = true;
      }
    });
    return { battleLogOnScreen };
  },
};
</script>

<style lang="scss" scoped>
@import "../../variable.scss";
$textColor: $primaire;
.containerTitreRealisation {
  position: relative;
  display: flex;
  background-color: transparent;
  pointer-events: visible;
  border: 1px solid $primaire;
  border-radius: 2em;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  top: 95%;
  left: 0%;
  margin: 0% 5% 0% 5%;
  height: auto;
  width: auto;
  max-width: none;
  max-height: 15%;
  flex-direction: row;
  @media (max-height: 768px) {
    top: 90%;
  }

  @media (min-width: 768px) {
    top: 0%;
    left: 0%;
    height: 100%;
    width: auto;
    max-width: 20%;
    max-height: none;
    flex-direction: column;
    align-items: stretch;
    margin: 0 2em 0 0;
    overflow: auto;
  }
}
ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  margin: none;
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    overflow: auto;
    margin: 1vh 0 1vh 0;
  }
}
li {
  padding: 0 5px 0 5px;
  margin: 10px 10px 10px 10px;
}
ul li,
i {
  text-align: center;
  @media (max-width: 375px) {
    font-size: 0.75em;
  }
  @media (min-width: 768px) {
    font-size: 2.5vh;
  }
  &:hover,
  &:active,
  &:focus {
    color: $textColor + 30;
    text-shadow: 0px 8px 10px $tertiaire;
  }
}
.active {
  color: $textColor - 50;
  text-shadow: 0px 8px 10px $tertiaire;
}

i {
  display: flex;

  border-radius: 50%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  &:hover {
    color: $toggle-line-focus-color;
  }

  &.fa-chevron-left {
    position: relative;
    height: 100%;
    width: 20px;
    left: 0%;
    border-right: 1px solid $primaire;
  }
  &.fa-chevron-right {
    position: relative;
    height: 100%;
    width: 20px;
    right: 0%;
    margin-left: 0%;
    border-left: 1px solid $primaire;
  }
  &.fa-chevron-down {
    position: relative;
    height: 2vh;
    width: 100%;
    bottom: 0%;
    margin-bottom: 0%;
    border-top: 1px solid $primaire;
  }
  &.fa-chevron-up {
    position: relative;
    height: 2vh;
    width: 100%;
    top: 0%;
    border-bottom: 1px solid $primaire;
  }
}
</style>