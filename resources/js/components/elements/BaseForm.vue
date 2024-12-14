<template>
    <base-card>
        <form @submit.prevent="formHandler" class="base-form">
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

<style scoped>
.base-form {
    @apply max-w-sm mx-auto;
}
</style>