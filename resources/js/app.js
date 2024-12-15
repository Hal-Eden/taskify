import "./bootstrap";

import { createApp } from "vue";
import router from "./router";
import store from "./store/index.js";
import App from "./App.vue";
import axios from "axios";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";

import BaseBadge from "./components/elements/BaseBadge.vue";
import BaseButton from "./components/elements/BaseButton.vue";
import BaseCard from "./components/elements/BaseCard.vue";
import BaseForm from "./components/elements/BaseForm.vue";
import BaseInput from "./components/elements/BaseInput.vue";
import BaseHeader from "./components/elements/BaseHeader.vue";
import LoadingWrapper from "./components/modules/LoadingWrapper.vue";
import BaseIcon from "./components/elements/BaseIcon.vue";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en,
    },
});

const app = createApp(App);

app.component("base-badge", BaseBadge)
    .component("base-button", BaseButton)
    .component("base-card", BaseCard)
    .component("base-form", BaseForm)
    .component("base-input", BaseInput)
    .component("base-header", BaseHeader)
    .component("base-icon", BaseIcon)
    .component("loading-wrapper", LoadingWrapper);

store.dispatch("auth/attempt").then(() => {
    app.use(router).use(store).use(i18n).mount("#app");
});
