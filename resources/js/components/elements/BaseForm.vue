<template>
    <base-card>
        <form @submit.prevent="formHandler" class="max-w-sm mx-auto">
            <slot />
        </form>
    </base-card>
</template>

<script>
export default {
    props: ['form-action'],
    data() {
        return {}
    },
    methods: {
        formHandler() {
            this.$emit('form-action');
        }
    },
}
</script>