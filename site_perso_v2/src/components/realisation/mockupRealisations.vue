<template>
  <div class="containerMockupRealisation">
    <div class="figure">
      <!-- <button @click="getSize">Test</button> -->
      <img
        id="mockupMac"
        src="../../assets/mockupRealisation/macBookPro.png"
        alt=""
      />
      <div class="frameworkImac"></div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {
    function getSize() {
      console.log("dans Get Size");
      var img = document.getElementById("mockupMac");
      console.log(document.querySelector(".figure"))
      var width = img.clientWidth;
      var height = img.clientHeight;
      console.log("Width =" + width + ", " + "Height=" + height);
    }
    onMounted(() => {
      getSize();
    });
    return { getSize };
  },
};
</script>

<style lang="scss" scoped>

button {
z-index: 500;
pointer-events: auto;    
}
.containerMockupRealisation {
  position: absolute;
  top: 20%;
  height: 80%;
  width: 100%;
  background-color: transparent;
}

.figure {
  height: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
}
img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media (min-width: 768px) {
    object-fit: contain;
  }
}
.frameworkImac {
  position: absolute;
    top: 16%;
    left: 15%;
  height: calc(530px - 40%);
  width: calc(562px - 30%);
  border: solid 1px yellow;
}
</style>