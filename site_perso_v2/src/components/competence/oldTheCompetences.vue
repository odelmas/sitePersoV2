<template>
  <section class="fullPage">
    <h2>Compétences</h2>
    <div>
      <article>
        <h3>FrontEnd</h3>
        <div>
          <div>
            <i class="fab fa-js"></i>
            <p class="">Javascript</p>
          </div>
          <div>
            <i class="fab fa-vuejs"></i>
            <p class="">VueJs</p>
          </div>
          <div>
            <i class="fab fa-sass"></i>
            <p class="">Sass</p>
          </div>
          <div>
            <i class="fab fa-bootstrap"></i>
            <p class="">bootstrap</p>
          </div>
          <div>
            <i class="fab fa-github"></i>
            <p class="">Github</p>
          </div>
          <div>
            <i class="fab fa-css3-alt"></i>
            <p class="">Css</p>
          </div>
          <div>
            <i class="fab fa-html5"></i>
            <p>HTML5</p>
          </div>
        </div>
      </article>
      <article>
        <h3>BackEnd</h3>
        <div>
          <div>
            <i class="fab fa-node-js"></i>
            <p class="">Node.js</p>
          </div>
          <div>
            <i class="fab fa-linux"></i>
            <p class="">Linux</p>
          </div>
          <div>
            <i class="fab fa-raspberry-pi"></i>
            <p class="">Raspberry Pi</p>
          </div>
          <div>
            <i class="fab fa-windows"></i>
            <p class="">Windows</p>
          </div>
          <div>
            <i class="fab fa-python"></i>
            <p class="">Python</p>
          </div>
          <div>
            <p class="">Sql</p>
          </div>
          <div>
            <p>MySql</p>
          </div>
          <div><p>MongoDb</p></div>
        </div>
      </article>
    </div>
  </section>
  <div class="fullPage onScreen" id="ancreCompetence">
    <the-animation-background
      text="Compétences"
      idPage="ancreCompetence"
      color="light"
    ></the-animation-background>
  </div>
</template>
<style lang="scss" scoped>
@import "../variable.scss";
.fullPage {
  max-height: 100vh;
  width: 100vw;
}
section {
  div {
    z-index: 5;
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }
  pointer-events: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
}
article {
  padding: 20px;
  margin: 20px;
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 5;

  div {
    //   flex-direction: column;
      flex-wrap: wrap;
    justify-content: space-around;
  }
}
p,
i {
  color: $secondaire;
  z-index: 5;
  font-size: 2em;
  margin: 10px;
}
h2 {
  font-size: 5em;
  margin: 40px 20px 20px 20px;
}
h3 {
  font-size: 3.5em;
  
  margin: 20px 20px 20px 20px;
}
h2,
h3 {
  color: $secondaire;
  text-align: center;
  background-color: transparent;
  z-index: 5;
}
</style>