import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import TheAnimationBackground from "./components/ui/TheAnimationBackground.vue";

const app = createApp(App);

app.use(store);
app.component('the-animation-background',TheAnimationBackground)

app.mount("#app");
