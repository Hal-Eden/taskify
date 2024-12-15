<template>
    <div class="checkbox-list">
        <base-checkbox :value="item.value" :color="item.color" :label="item.label" @update-value="clickHandler"
            v-for="item in items" :key="item.value"></base-checkbox>
    </div>
</template>

<script>
import BaseCheckbox from '../elements/BaseCheckbox.vue';

export default {
    emits: ['update-values'],
    components: { BaseCheckbox },
    props: {
        items: {
            type: Array,
            default: [],
        },
        selectedValues: {
            type: Array,
            default: [],
        }
    },
    data() {
        return {
            checkedItems: []
        };
    },
    methods: {
        clickHandler({ value, checked }) {
            if (checked) {
                this.checkedItems.push(value);
            } else {
                const index = this.checkedItems.indexOf(value);

                if (index > -1) {
                    this.checkedItems.splice(index, 1);
                }
            }
            this.$emit('update-values', this.checkedItems);
        }
    },
}
</script>

<style scoped>
.checkbox-list {
    @apply mb-5 text-lg font-normal text-gray-500 whitespace-nowrap
}
</style>
