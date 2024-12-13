<template>
    <div class="w-full">
        <the-sidebar></the-sidebar>
        <base-dashboard>
            <slot />
        </base-dashboard>
    </div>
</template>

<script>
import BaseDashboard from '../elements/BaseDashboard.vue';
import TheSidebar from '../modules/TheSidebar.vue';

export default {
    components: { BaseDashboard, TheSidebar }
}
</script>

<style scoped></style>