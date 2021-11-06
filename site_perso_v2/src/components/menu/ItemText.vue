<template>
  <div class="item-text-container">
    <div class="text"><p>Je ne comprend pas bien pourquoi</p></div>
  </div>
</template>

<script>
import TextScramble from "./textScramble";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const phrases = [
        "Bonjour,",
        "Anael Damette",
        "Développeur Web",
        "Vous êtes dans le menu de mon site perso",
      ];

      const el = document.querySelector(".text");
      console.log(el);
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
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
.item-text-container {
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}
.text {
  justify-content: center;
  align-items: center;
  font-weight: 100;
  color: #181818;
  font-size: 1.5em;
  margin: 0.5rem;
  @media (min-width: 768px) {
    font-size: 4vw;
    margin: 2vw;
  }
}
.dud {
  color: #757575;
}
</style>