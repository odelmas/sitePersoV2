<template>
  <div>
    <i :class="iClass"></i>
    <p>{{ name }}</p>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["competence"],
  setup(props) {
    let competence = ref(props.competence).value;
    let iClass = competence.iClass;
    let name = competence.name;
    return { iClass, name };
  },
};
</script>
<style lang="scss" scoped>
@import "../../variable.scss";
p,
i {
  color: $secondaire;
  z-index: 5;
  @media (max-width: 375px) {
    font-size: 0.75em;
  }
  @media (min-width: 768px) {
    font-size: 3vh;
  }
  margin: 10px;
}
div {
  display: flex;
  flex-direction: row;
}
</style>