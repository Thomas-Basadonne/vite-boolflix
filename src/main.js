import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";

// FONTAWESOME

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHippo,
  faStar as SolidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as RegularStar } from "@fortawesome/free-regular-svg-icons";

library.add(faHippo, SolidStar, RegularStar);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
