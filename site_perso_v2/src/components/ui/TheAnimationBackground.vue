<template>
  <div class="wrapperHeight" :class="color">
    <div class="wrapperMultiplier">
      <div class="multiplier pre">
        &nbsp;<span>{{ text }}</span>
      </div>
      <div class="multiplier deu">
        &nbsp;<span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { fillWidth, fillHeight } from "./animationBackground.js";
export default {
  props: ["text", "idPage", "color"],
  setup(props) {
    onMounted(() => {
      fillWidth(props.text, props.idPage);
      fillHeight(props.idPage);
      window.addEventListener("resize", () => {
        fillWidth(props.text, props.idPage);
        fillHeight(props.idPage);
      });
    });

    return {};
  },
};
</script>

<style lang="scss">
@import "../../variable.scss";
.wrapperMultiplier {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  z-index: 0;
}
.dark {
  background-color: $secondaire;
  .wrapperMultiplier .multiplier span {
    color: $secondaire - 5;
    transition: all 1.5s;
  }
  .wrapperMultiplier .multiplier span:hover {
    color: $tertiaire-dark;
    transition: all 0s;
  }
}
.light {
  background-color: $primaire;
  .wrapperMultiplier .multiplier span {
    color: $primaire + 5;
    transition: all 1.5s;
  }
  .wrapperMultiplier .multiplier span:hover {
    color: $primaire ;
    transition: all 0s;
  }
}

.multiplier {
  position: relative;
  padding: 5px 0 5px 0;
  font-size: 30px;
  white-space: nowrap;
  span {
    z-index: 2;
  }
}

.wrapperMultiplier:nth-child(odd) .multiplier {
  animation: scrollTxtOdd 120s linear infinite;
}
.wrapperMultiplier:nth-child(even) .multiplier {
  animation: scrollTxtEven 120s linear infinite;
}
.wrapperHeight {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  padding: 5px;
}

@keyframes scrollTxtOdd {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes scrollTxtEven {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
