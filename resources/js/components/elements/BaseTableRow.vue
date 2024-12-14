<template>
    <tr class="base-table-row">
        <slot />
    </tr>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
    },
}
</script>

<style scoped>
.base-table-row {
    @apply bg-white border-b hover:bg-gray-50
}
</style>