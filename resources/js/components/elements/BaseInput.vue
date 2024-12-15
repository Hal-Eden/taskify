<template>
    <div class="mb-6">
        <label :for="name" :class="labelClasses">{{ inputLabel }}</label>
        <select v-if="type === 'select'" :id="name" @change="handleInput" :name="name" class="input-text">
            <option :selected="value === option.value" v-for="option in options" :key="option.value"
                :value="option.value">{{ $t(option.label) }}</option>
        </select>
        <input v-else :id="name" :type="type" :class="inputClasses" :value="value" :placeholder="inputPlaceholder"
            @change="handleInput" />
        <template v-if="error.length">
            <p v-for="err in error" class="errors">
                {{ err }}
            </p>
        </template>
    </div>
</template>

<script>
export default {
    emits: ['input-action'],
    props: {
        name: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        error: {
            type: Array,
            default: []
        },
        options: {
            type: Array,
            default: []
        }
    },
    computed: {
        inputClasses() {
            return this.error.length ? 'error' : 'input-text';
        },
        labelClasses() {
            return `label ${this.error.length ? 'label-error' : ''}`;
        },
        inputLabel() {
            return this.label ? this.$t(this.label) : '';
        },
        inputPlaceholder() {
            return this.placeholder ? this.$t(this.placeholder) : '';
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input-action', e, this.name)
        }
    }
}
</script>

<style scoped>
select:not([size]) {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3E%3C/svg%3E");
    background-position: right .75rem center;
    background-repeat: no-repeat;
    background-size: .75em .75em;
    padding-right: 2.5rem;
    appearance: none;
}

select::-ms-expand {
    display: none;
    /* For Internet Explorer */
}

.input-text {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
}

.error {
    @apply bg-red-50 border border-red-500 text-red-900 outline-red-500 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5;
}

.label {
    @apply select-none block mb-2 text-sm font-medium text-gray-900
}

.label-error {
    @apply text-red-700
}

.errors {
    @apply mt-2 text-sm text-red-600 dark:text-red-500
}
</style>