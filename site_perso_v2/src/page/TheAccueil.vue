<template>
  <div class="fullPage onScreen scrollSnap" id="ancreAccueil">
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
  @media (max-width: 375px) {
    font-size: 0.75em;
  }
  font-size: 1em;
  margin: 0.5rem;
   @media (min-width: 404px) {
    font-size: 4vw
  }
  @media (min-width: 892px) {
    font-size: 5vh;
    margin: 2vw;
  }
  margin: 10px;
}
h2,
h3 {
  @media (max-width: 375px) {
    font-size: 1.5em;
  }
  font-size: 2em;
  margin: 0.5rem;
  @media (min-width: 404px) {
    font-size: 6vw
  }
  @media (min-width: 892px) {
    font-size: 10vh;
    margin: 2vw;
  }
  color: $primaire;
  text-align: center;
  background-color: transparent;
  margin-bottom: 20px;
  z-index: 5;
}
</style>