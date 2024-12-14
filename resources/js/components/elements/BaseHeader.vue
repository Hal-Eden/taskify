<template>
    <div class="base-header">
        <h1 class="title">
            <slot />
        </h1>
        <hr class="hr">
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.title {
    @apply select-none pt-2 text-center text-3xl font-bold uppercase;
}

hr {
    @apply w-48 h-1 mx-auto bg-gray-100 border-0 rounded mb-8 mt-6;
}
</style>