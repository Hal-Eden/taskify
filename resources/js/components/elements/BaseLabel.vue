<template>
    <div id="alert-additional-content-1"
        :class="classNames">
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
            return `mx-auto h-36 w-36 p-4 my-4 border-2 border-dashed rounded-lg bg-${this.color}-100 text-${this.color}-800 dark:bg-${this.color}-900 dark:text-${this.color}-300 border-${this.color}-300 bg-${this.color}-50`;
        }
    }
}
</script>