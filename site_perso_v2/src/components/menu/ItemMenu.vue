<template>
  <div class="item-container">
    <a href="#ancreAccueil" class="item underline" @click="toggleMenu">
      <span>1</span>
      <h2 class="">Accueil</h2></a
    >
    <a href="#ancreCompetence" class="item underline" @click="toggleMenu">
      <span>2</span>
      <h2 class="">Compétences</h2></a
    >
    <a href="#ancreRealisation" class="item underline" @click="toggleMenu">
      <span>3</span>
      <h2 class="">Réalisations</h2></a
    >
    <a href="#ancreContact" class="item underline" @click="toggleMenu">
      <span>4</span>
      <h2 class="">Contact</h2></a
    >
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    function toggleMenu() {
      store.dispatch("changeMenuToggle");
    }
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
@import "../../variable.scss";
a {
  text-decoration: none;
  color: $secondaire;
  @media (min-width: 768px) {
    color: $primaire;
  }
}
.item-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: transparent;
}
.item:hover,
.item:focus {
  transition: 0.5s ease;
  background-clip: text;
  color: transparent !important;
  background-image: url("../../assets/img/ImageFond3.jpg");
  background-size: 100vw 100vh;
  animation: backgroundMove 120s linear alternate infinite;
}
.item {
  background-color: transparent;
  display: flex;
  margin: 5px;
  padding: 5px;
  span,
  h2 {
    background-color: transparent;
    @media (max-width: 375px) {
      font-size: 1.5em;
    }
    font-size: 2em;
    margin: 0.5rem;
    @media (min-width: 768px) {
      font-size: 4.5vw;
      margin: 2vw;
    }
  }
}
span {
  visibility: hidden;
}
.item:hover,
.item:focus {
  span {
    visibility: visible;
    display: flex;
    animation: rollYSpan 0.5s ease-out;
  }
}

@keyframes rollYSpan {
  from {
    opacity: 0;
    transform: skew(-60deg, -60deg);
  }
  to {
    opacity: 1;
    transform: skew(0deg, 0deg);
  }
}
@keyframes backgroundMove {
  0% {
    background-position-x: 25%;
    background-position-y: 25%;
  }
  25% {
    background-position-x: 50%;
    background-position-y: -50%;
  }
  50% {
    background-position-x: 50%;
    background-position-y: 50%;
  }
  75% {
    background-position-x: -50%;
    background-position-y: 50%;
  }
  100% {
    background-position-x: 25%;
    background-position-y: 25%;
  }
}
</style>