<template>
    <table class="base-table">
        <thead class="base-table__head">
            <tr>
                <th v-for="column in columns" :key="column" scope="col" :class="`px-3 md:px-2 py-3 text-base ${column.classes}`">
                    {{ $t(column.label) }}
                </th>
            </tr>
        </thead>
        <tbody>
            <slot />
        </tbody>
    </table>
</template>

<script>

export default {
    props:
    {
        columns: {
            type: Array,
            required: true,
        }
    }
    ,
    data() {
        return {}
    },
    methods: {
    },
}
</script>

<style scoped>
.base-table {
    @apply w-full text-sm text-left rtl:text-right text-gray-500 select-none
}

.base-table__head {
    @apply text-xs text-gray-700 uppercase bg-gray-50
}
</style>