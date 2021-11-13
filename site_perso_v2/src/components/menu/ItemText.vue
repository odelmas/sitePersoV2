<template>
  <div class="item-text-container">
    <div class="text">Bonjour, bienvenue, Anaël Damette, Développeur Web</div>
  </div>
</template>

<script>
import TextScramble from "./textScramble";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const phrases = [
        "Anaël Damette",
        "Développeur Web"
      ];

      const el = document.querySelector(".text");
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 1500);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();
    });
    return {};
  },
};
</script>


<style lang="scss" scoped>
@import '../../variable.scss';
.item-text-container {
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: transparent;
}
.text {
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  color: $primaire;
  @media (min-width: 768px) {
    color: $secondaire
  }
  font-size: 1.5em;
  margin: 0.5rem;
  @media (min-width: 768px) {
    font-size: 2vw;
    margin: 2vw;
  }
}
.dud {
  color: #757575;
  background-color: transparent;
}
</style>