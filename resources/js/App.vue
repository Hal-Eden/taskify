<template>
    <main>
        <header>
            <the-navbar></the-navbar>
        </header>

        <router-view v-slot="slotProps">
            <transition name="route" mode="out-in">
                <not-found v-if="isNotFound"></not-found>
                <the-dashboard v-else-if="$store.getters['auth/isAuthenticated']">
                    <component :is="slotProps.Component"></component>
                </the-dashboard>
                <base-container v-else>
                    <component :is="slotProps.Component"></component>
                </base-container>
            </transition>
        </router-view>
    </main>
</template>

<script>
import TheNavbar from './components/modules/TheNavbar.vue';
import TheSidebar from './components/modules/TheSidebar.vue';
import TheDashboard from './components/templates/TheDashboard.vue';
import BaseContainer from './components/elements/BaseContainer.vue';
import NotFound from './pages/NotFound.vue';

export default {
    el: '#app',
    components: { TheNavbar, TheSidebar, TheDashboard, BaseContainer, NotFound },
    computed: {
        isNotFound() {
            return this.$route.name === 'not-found';
        }
    }
}
</script>