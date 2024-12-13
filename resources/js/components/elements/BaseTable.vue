<template>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th v-for="column in columns" :key="column" scope="col" class="px-6 py-3 text-base">
                    {{ column }}
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