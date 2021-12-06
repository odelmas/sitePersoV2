<template>
  <the-header id="theHeader"></the-header>
  <the-menu :isActive="menuToggle"></the-menu>
  <the-accueil></the-accueil>
  <the-competence></the-competence>
  <the-realisation v-if="realisation"></the-realisation>
  <the-contact></the-contact>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheMenu from "./page/TheMenu.vue";
import TheAccueil from "./page/TheAccueil.vue";
import TheCompetence from "./page/TheCompetence.vue";
import TheRealisation from "./page/TheRealisation.vue";
import TheContact from "./page/TheContact.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    TheHeader,
    TheMenu,
    TheAccueil,
    TheCompetence,
    TheRealisation,
    TheContact,
  },
  setup() {
        const realisation = computed(function () {
      return store.getters.realisation;
    });
    onMounted(() => {
      function triggerBackgroundLine(observables) {
        observables.forEach((observable) => {
          if (observable.isIntersecting) {
            let arrayId = [
              "ancreAccueil",
              "ancreCompetence",
              "ancreRealisation",
              "ancreContact",
            ];
            arrayId.forEach(function (itemArrayId) {
              if (observable.target.id == itemArrayId) {
                switch (itemArrayId) {
                  case "ancreAccueil":
                    store.dispatch("changeBackgroundColor", "light");
                    break;
                  case "ancreCompetence":
                    store.dispatch("changeBackgroundColor", "dark");
                    break;
                  case "ancreRealisation":
                    store.dispatch("changeBackgroundColor", "light");
                    break;
                  case "ancreContact":
                    store.dispatch("changeBackgroundColor", "dark");
                    break;
                  default:
                    console.log(
                      `Sorry, ça marche pas parce que ${itemArrayId}`
                    );
                }
              }
            });
          }
        });
      }
      let options = {
        root: null,
        rootMargin: "0px 0px -80% 0px",
        threshold: [0.1],
      };
      let observer = new IntersectionObserver(triggerBackgroundLine, options);

      let items = document.querySelectorAll(".onScreen");
      items.forEach((item) => {
        observer.observe(item);
      });
    });

    const store = useStore();
    function mousePosition() {
      store.dispatch("mousePosition");
    }
    let animateOff = ref(true);
    const menuToggle = computed(function () {
      return store.getters.menuToggle;
    });
    return { menuToggle, animateOff, mousePosition, realisation };
  },
};
</script>
<style lang="scss">
@import "./variable.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");
@font-face {
  font-family: monumentExtendedUltrabold;
  src: url("./assets/MonumentExtended/MonumentExtended-Ultrabold.otf");
}
@font-face {
  font-family: monumentExtendedRegular;
  src: url("./assets/MonumentExtended/MonumentExtended-Regular.otf");
}

* {
  font-family: "monumentExtendedUltrabold", "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background-color: transparent;
  scroll-behavior: smooth;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
*::-webkit-scrollbar {
  width: 0 !important;
}
button { border: none;}


.fullPage {
    height: 100vh;
    width: 100vw;
    background-color: $primaire !important;
    overflow: hidden;
}
a {
  &:focus-visible {
    outline: none;
  }
  text-decoration: none;
}

ul {
  list-style: none;
}
.underline,
.underlineActif {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #242424;
    transition: width 1s cubic-bezier(0.25, 1, 0.5, 1);
  }
}

.underline-white::before {
  background-color: #242424 !important;
}

@media (hover: hover) and (pointer: fine) {
  .underline:hover::before,
  .underlineActif::before {
    left: 0;
    right: auto;
    width: 100%;
  }
}
.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: $secondaire;
  border-radius: 1em;
  overflow: scroll;
}
</style>
