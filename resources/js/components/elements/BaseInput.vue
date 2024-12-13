<template>
    <div class="mb-6">
        <label :for="name" :class="labelClasses">{{ label }}</label>
        <select v-if="type === 'select'" id="countries" @change="handleInput" :name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option :selected="value === option.value" v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
        <input v-else :type="type"
            :class="inputClasses"
            :value="value"
            :placeholder="placeholder"
            @change="handleInput" />
        <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ error }}</p>
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
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: []
        }
    },
    computed: {
        inputClasses() {
            if (this.error) {
                return "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
            }

            return "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
        },
        labelClasses() {
            if (this.error) {
                return "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500";
            }
            
            return "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input-action', e, this.name)
        }
    },
    data() {
        return {}
    }
}
</script>