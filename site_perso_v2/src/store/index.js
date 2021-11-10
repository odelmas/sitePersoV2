import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      positionMouseX: 0,
      positionMouseY: 0,
      menuToggle: false,
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
    }
  },
  actions: {
    mousePosition(context) {
      context.commit("mousePosition");
    },
    changeMenuToggle(context) {
      context.commit("changeMenuToggle")
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
    }
  },
});
