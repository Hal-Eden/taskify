<template>
    <div class="loading-wrapper" v-if="isLoading && !isLoaded">
        <base-icon icon="loader"></base-icon>
    </div>
    <template v-else>
        <slot />
    </template>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        isLoaded: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        ...mapGetters(['isLoading']),
    }
}
</script>

<style scoped>
.loading-wrapper {
    @apply w-full flex items-center
}
</style>