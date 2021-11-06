<template>
  <div class="item-container">
    <div class="item">
      <span>1</span>
      <h2>Acceuil</h2>
    </div>
    <div class="item">
      <span>2</span>
      <h2>Compétences</h2>
    </div>
    <div class="item">
      <span>3</span>
      <h2>Réalisations</h2>
    </div>
    <div class="item">
      <span>4</span>
      <h2>Contact</h2>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.item {
  display: flex;
  margin: 5px;
  padding: 5px;
  span,
  h2 {
    font-size: 2em;
    margin: 0.5rem;
    @media (min-width: 768px) {
      font-size: 5vw;
      margin: 2vw;
    }
  }
}
span {
  visibility: hidden;
}
.item:hover,
.item:focus {
  span {
    visibility: visible;
    display: flex;
    animation: rollYSpan 0.5s ease-out;
  }
}

@keyframes rollYSpan {
  from {
    opacity: 0;
    transform: skew(-60deg, -60deg);
  }
  to {
    opacity: 1;
    transform: skew(0deg, 0deg);
  }
}
</style>