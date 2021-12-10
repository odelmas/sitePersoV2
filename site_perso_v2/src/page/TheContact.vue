<template>
  <section class="fullPage">
    <div>
      <h2>Contact</h2>
      <p class="quoteTitleContact">
        Parlez-moi de votre projet ou demandez un devis !
      </p>
    </div>

    <div class="flexLine">
      <div class="flexColumn">
        <h3>Contactez-moi !</h3>
        <div class="iconAndStuff">
          <a href="mailto:contact@anaeldamette.fr"
            ><i class="fas fa-envelope"></i
          ></a>
          <a href="tel:+33777367395"><i class="fas fa-mobile"></i></a>
          <a href="https://www.linkedin.com/in/anael-damette/" target="_blank"
            ><i class="fab fa-linkedin"></i
          ></a>

          <a href="https://github.com/AnaelDamette" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </div>
      </div>
      <div class="textePresentationContact">
        <p>
          Développeur Web Fullstack, je suis à votre disposition pour toutes créations de sites internet ou d'applications web.
        </p>
      </div>
    </div>
  </section>
  <div class="fullPage onScreen" id="ancreContact">
    <the-animation-background
      text="Contact"
      idPage="ancreContact"
      color="light"
    ></the-animation-background>
  </div>
</template>
<style lang="scss" scoped>
@import "../variable.scss";

$textColor: $secondaire;
a {
  pointer-events: visible;
  text-decoration: none;
  z-index: 5;
  i {
    color: $textColor;
  }
}
.fullPage {
  justify-content: space-around;
}
section {
  div {
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 768px) {
      padding: 10px;
      border-radius: 1em;
      background-color: $bgOpacity;
    }
    justify-content: space-around;
    margin: 20px;
    div {
      flex-direction: row;
    }
  }
  pointer-events: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
h3 {
  color: $textColor;
  @media (max-width: 375px) {
    font-size: 2.3vh;
  }
  font-size: 3vh;
  margin: 0.5rem;
  @media (min-width: 1024px) {
    font-size: 6vh;
  }
  text-align: center;
}
h2 {
  @media (max-width: 375px) {
    font-size: 3vh;
  }
  font-size: 5vh;
  margin: 0.5rem;
  @media (min-width: 1024px) {
    font-size: 10vh;
  }
  margin: 40px 20px 20px 20px;
  color: $textColor;
  text-align: center;
  background-color: transparent;
  z-index: 5;
}
p {
  color: $textColor;
}
.quoteTitleContact {
  text-align: center;
  color: $textColor;
  @media (max-width: 375px) {
    font-size: 1em;
  }
  font-size: 3vw;
  margin: 0.5rem;
  @media (min-width: 1024px) {
    font-size: 4vh;
  }
  z-index: 5;
}
.iconAndStuff {
  @media (max-width: 375px) {
    font-size: 3vh;
  }
  font-size: 4vh;
  margin: 0.5rem;
  @media (min-width: 1024px) {
    font-size: 6vh;
  }
  background-color: transparent;
  margin: 0;
  a {
    margin: 0.5em;
    &:hover {
      i {
        color: $textColor - 50;
        text-shadow: 0px 8px 10px $tertiaire;
      }
    }
  }
}
.textePresentationContact {
  margin: 0;
  @media (min-width: 768px) {
    margin: 20px;
  }
  p {
    @media (max-width: 375px) {
      font-size: 1.5vh;
    }
    font-size: 2vh;
    margin: 0.5rem;
    @media (min-width: 1024px) {
      font-size: 2.5vh;
    }
  }
  background-color: transparent;
  text-align: center;
  @media (min-width: 768px) {
    width: 60%;
    padding: 1em;
    border-radius: 1em;
    background-color: rgba(0, 0, 0, 0.1);
  }

  align-items: center;
  justify-content: center;
}
.flexColumn {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: transparent;
  @media (min-width: 768px) {
    margin: 20px;
    padding: 1em;
    border-radius: 1em;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.flexLine {
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    flex-direction: row;
    background-color: transparent;
  }
}
</style>