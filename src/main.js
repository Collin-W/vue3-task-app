// this file is the entry point for the vue app

import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router/index";

createApp(App).use(router).mount("#app");

/* 
    CLI Commands used:  Alis


    npm run serve   "frontend"
    npm run json-server --watch db.json --port 5000     "backend"
    npm run build
    npm i vue-router
*/
// https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=3268s&ab_channel=TraversyMedia