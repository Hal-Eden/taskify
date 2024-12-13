import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import store from './store/index.js';
import App from './App.vue';
import axios from 'axios'

import BaseBadge from './components/elements/BaseBadge.vue';
import BaseButton from './components/elements/BaseButton.vue';
import BaseCard from './components/elements/BaseCard.vue';
import BaseForm from './components/elements/BaseForm.vue';
import BaseInput from './components/elements/BaseInput.vue';
import BaseHeader from './components/elements/BaseHeader.vue';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = 'http://127.0.0.1:8001';

const app = createApp(App);

app.component('base-badge', BaseBadge)
    .component('base-button', BaseButton)
    .component('base-card', BaseCard)
    .component('base-form', BaseForm)
    .component('base-input', BaseInput)
    .component('base-header', BaseHeader)

store.dispatch('auth/attempt').then(() => {
    app.use(router)
        .use(store)
        .mount("#app");
})