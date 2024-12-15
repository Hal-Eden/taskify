<template>
    <td class="base-table-data">
        <slot />
    </td>

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
.base-table-data {
    @apply px-3 md:px-2 py-4 overflow-hidden whitespace-nowrap
}
</style>