<template>
    <div class="base-card">
        <slot />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .base-card {
        @apply mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
    }
</style>