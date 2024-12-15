<template>
    <input class="hidden" :id="value" type="checkbox" :value="value" v-model="checked" @change="handleToggle" />
    <label :class="classNames" :for="value">
        {{ label }}
    </label>
</template>

<script>

export default {
    emits: ['update-value'],
    props: {
        value: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: 'blue',
        },
    },
    data() {
        return {
            checked: false
        };
    },
    computed: {
        classNames() {
            return `checkbox-button ${this.color} ${this.checked ? 'selected' : ''}`
        }
    },
    methods: {
        handleToggle() {
            this.$emit('update-value', { value: this.value, checked: this.checked });
        }
    }
}
</script>

<style>
.checkbox-button {
    @apply mx-1 w-10 h-10 border-2 rounded-lg inline-flex items-center justify-center cursor-pointer border-white
}

.red {
    @apply text-red-600
}

.blue {
    @apply bg-blue-50
}

.red.selected {
    @apply border-red-600
}

.blue.selected {
    @apply border-blue-600
}

.green.selected {
    @apply border-green-600
}
</style>