<template>
    <component :is="iconComponent" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    props: {
        icon: {
            type: String,
            required: true
        }
    },
    computed: {
        iconComponent() {
            return defineAsyncComponent(() => import(`@/assets/icons/${this.icon}.svg`));
        }
    },
};
</script>