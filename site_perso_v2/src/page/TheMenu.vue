<template>
  <div class="container">
    <transition name="expMenu">
      <div v-if="isActive" class="explicationMenu">
        <item-text></item-text>
      </div>
    </transition>
    <transition name="aniMenu">
      <div v-if="isActive" class="menu">
        <item-menu></item-menu></div
    ></transition>
  </div>
</template>

<script>
import ItemMenu from "../components/menu/ItemMenu.vue";
import ItemText from "../components/menu/ItemText.vue"
export default {
  props: ["isActive"],
  components: {
    ItemMenu,
    ItemText
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 3em;
}
.explicationMenu,
.menu {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  justify-content: space-around;
  align-items: center;
}
.menu {
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
}
.explicationMenu {
  background-color: darkgrey;
  width: 100%;
  height: 50%;
  @media (min-width: 768px) {
    height: 100%;
    width: 50%;
    min-width: 25vw;;
  }
}

.expMenu-enter-active {
  animation: openExpMenu 0.9s forwards ease-out;
}
.expMenu-leave-active {
  animation: closeExpMenu 0.9s forwards ease-in;
}

.aniMenu-enter-active {
  animation: openMenu 0.9s forwards ease-out;
}
.aniMenu-leave-active {
  animation: closeMenu 0.9s forwards ease-in;
}

@keyframes openExpMenu {
  from {
    transform: translateX(-200vw);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes openMenu {
  from {
    transform: translateX(200vw);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes closeExpMenu {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200vw);
  }
}

@keyframes closeMenu {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200vw);
  }
}
</style>