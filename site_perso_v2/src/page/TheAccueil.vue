<template>
  <div class="fullPage onScreen" id="ancreAccueil">
    <section>
      <h2>Anaël Damette</h2>
      <h3>Développeur web</h3>
      <p>Création de Sites Internet</p>
      <p>Sites Vitrines, Sites Marchands</p>
      <p>FullStack : FrontEnd, BackEnd</p>
    </section>
    <the-animation-background
      text="Accueil"
      idPage="ancreAccueil"
      color="dark"
    ></the-animation-background>
  </div>
</template>
<style lang="scss" scoped>

@import "../variable.scss";
.fullPage {
  height: 100vh;
  width: 100vw;
}
section {
  pointer-events: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
p {
    color: $primaire;
    z-index: 5;
    font-size: 2.5em;
    margin: 10px;
}
h2, h3 {
  color: $primaire;
  text-align: center;
  background-color: transparent;
  font-size: 5em;
  margin-bottom: 20px;
  z-index: 5;
}
</style>