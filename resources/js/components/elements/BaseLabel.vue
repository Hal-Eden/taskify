<template>
    <div :class="classNames">
        <div class="mt-2 mb-4 text-sm">
            <p class="text-center text-5xl">
                {{ stat }}
            </p>
        </div>
        <div class="text-center mt-6 uppercase">
            {{ label }}
        </div>
    </div>
</template>

<script>

export default {
    props: {
        color: {
            type: String,
            default: 'default',
        },
        stat: {
            type: Number,
            required: true,
        }, 
        label: {
            type: String,
            required: true,
        }
    },
    computed: {
        classNames() {
            return `base-label ${this.color}`;
        }
    }
}
</script>

<style scoped>
.base-label {
    @apply mx-auto h-36 w-36 p-4 my-4 border-2 border-dashed rounded-lg
}

.red {
    @apply bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-300 bg-red-50
}

.green {
    @apply bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300 bg-green-50
}

.gray {
    @apply bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 border-gray-300 bg-gray-50
}

.blue {
    @apply bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-300 bg-blue-50
}
</style>