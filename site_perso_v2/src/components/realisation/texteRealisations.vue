<template>
  <div class="containerTexteRealisation">
    <p class="text">Site Web de Marina Hantz, traductrice. J'ai réalisé le site avec Vue2 ainsi que Typescript, Ie18.</p>
  </div>
</template>
<script>
import TextScramble from "../menu/textScramble";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const phrases = document.querySelector(".text").textContent

      const el = document.querySelector(".text");
      const fx = new TextScramble(el);

      const next = () => {
        fx.setText(phrases).then(() => {
          setTimeout(next, 30000);
        });
      };

      next();
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../../variable.scss";
.containerTexteRealisation {
  height: auto;
  width: 100%;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
   @media (max-width: 375px) {
    font-size: 0.75em;
  }
  @media (min-width: 768px) {
    font-size: 2.5vh;
  }
  padding: 1vw;
}
</style>