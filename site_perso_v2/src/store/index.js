import { createStore } from "vuex";
import monsterSlayerModule from './modules/monsterSlayer';

export default createStore({
  modules: {
    monsterSlayer: monsterSlayerModule
  },
  state() {
    return {
      positionMouseX: 0,
      positionMouseY: 0,
      menuToggle: false,
      backgroundColor: 'light',
      realisation: true,
    };
  },
  mutations: {
    mousePosition(state) {
      document.addEventListener("mousemove", (e) => {
        const positionMouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const positionMouseY = (e.clientY / window.innerHeight) * 2 - 1;
        if (positionMouseX >= 0) {
          state.positionMouseX = positionMouseX;
        } else {
          state.positionMouseX = -positionMouseX;
        }
        if (positionMouseY >= 0) {
          state.positionMouseY = positionMouseY;
        } else {
          state.positionMouseY = -positionMouseY;
        }
      });
    },
    changeMenuToggle(state){
      state.menuToggle = !state.menuToggle
    },
    changeBackgroundColor(state, color) {
      state.backgroundColor = color
    }
  },
  actions: {
    mousePosition(context) {
      context.commit("mousePosition");
    },
    changeMenuToggle(context) {
      context.commit("changeMenuToggle")
    },
    changeBackgroundColor(context, color) {
      context.commit("changeBackgroundColor", color)
    }
  },
  getters: {
    mousePosition(state) {
      return {
        positionMouseX: state.positionMouseX,
        positionMouseY: state.positionMouseY,
      };
    },
    menuToggle(state) {
      return state.menuToggle
    },
    backgroundColor(state) {
      return state.backgroundColor
    },
    realisation(state) {
      return state.realisation
    }
  },
});
