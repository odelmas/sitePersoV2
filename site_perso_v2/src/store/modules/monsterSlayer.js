export default {
  namespaced: true,
  state() {
    return {
      DragonHealth: 100,
      JoueurHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  mutations: {
      updateDragonHealth(state, context) {
          state.DragonHealth = context
      },
      updateJoueurHealth(state, context) {
          state.JoueurHealth = context
      },
      updateWinner(state, context) {
          state.winner = context
      },
      updateCurrentRound(state, context) {
          state.currentRound = context
      },
      incrementCurrentRound(state) {
          state.currentRound++
      },
      updateLogMessages(state, context) {
          state.logMessages = context
      }
  },
  actions: {
      updateDragonHealth(context, number) {
          context.commit('updateDragonHealth', number)
      },
      updateJoueurHealth(context, number) {
        context.commit('updateJoueurHealth', number)
    },updateWinner(context, text) {
        context.commit('updateWinner', text)
    },updateCurrentRound(context, number) {
        context.commit('updateCurrentRound', number)
    },updateLogMessages(context, array) {
        context.commit('updateLogMessages', array)
    },
    incrementCurrentRound(context) {
        context.commit('incrementCurrentRound')
    }
  },
  getters: {
    DragonHealth(state) {
      return state.DragonHealth;
    },
    JoueurHealth(state) {
        return state.JoueurHealth
    },
    currentRound(state) {
        return state.currentRound
    },
    winner(state) {
        return state.winner
    },
    logMessages(state) {
        return state.logMessages
    }
  },
};
