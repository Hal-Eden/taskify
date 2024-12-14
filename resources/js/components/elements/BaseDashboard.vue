<template>
    <div class="base-dashboard">
        <div class="wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.base-dashboard {
    @apply p-4 sm:ml-64;
}

.wrapper {
    @apply rounded-lg mt-14 max-w-3xl mx-auto;
}
</style>