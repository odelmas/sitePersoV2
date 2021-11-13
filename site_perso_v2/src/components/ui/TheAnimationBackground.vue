<template>
  <div class="wrapperHeight">
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
  props: ["text", "id"],
  setup(props) {
    onMounted(() => {
      fillWidth(props.text, props.id);
      fillHeight(props.id);
      window.addEventListener('resize', () => {
        console.log("onResize")
        fillWidth(props.text, props.id);
        fillHeight(props.id)
      })
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

.multiplier {
  span {
    color: $primaire - 4;
  }

  span:hover {
    color: $primaire - 8;
  }

  position: relative;
  padding: 5px 0 5px 0;
  font-size: 30px;
  white-space: nowrap;
}

.wrapperMultiplier:nth-child(odd) .multiplier {
  animation: scrollTxtOdd 120s linear infinite;
}
.wrapperMultiplier:nth-child(even) .multiplier {
  animation: scrollTxtEven 120s linear infinite;
}
.wrapperHeight {
  background-color: $primaire;
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
