<template>
    <main>
        <header>
            <the-navbar></the-navbar>
        </header>

        <router-view v-slot="slotProps">
            <transition name="route" mode="out-in">
                <the-dashboard v-if="$store.getters['auth/isAuthenticated']">
                    <component :is="slotProps.Component"></component>
                </the-dashboard>
                <base-container v-else>
                    <component :is="slotProps.Component"></component>
                </base-container>
            </transition>
        </router-view>

        <the-footer></the-footer>
    </main>
</template>

<script>
import TheNavbar from './components/modules/TheNavbar.vue';
import TheSidebar from './components/modules/TheSidebar.vue';
import TheFooter from './components/modules/TheFooter.vue';
import TheDashboard from './components/templates/TheDashboard.vue';
import BaseContainer from './components/elements/BaseContainer.vue';

export default {
    el: '#app',
    components: { TheNavbar, TheFooter, TheSidebar, TheDashboard, BaseContainer },
    data: () => ({}),
}
</script>