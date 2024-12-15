<template>
    <div class="base-search">
        <input class="base-search__input" :value="term" :placeholder="placeholder" @input="handleInput" />
        <div v-if="loading" class="base-search__loading">
            <base-icon icon="button-loader"></base-icon>
        </div>
    </div>
</template>

<script>
import { debounce } from '../../utils/globals';

export default {
    emits: ['handle-search'],
    props: {
        term: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        inputClasses() {
            return "";
        }
    },
    methods: {
        handleInput: debounce(function (e) {
            this.$emit('handle-search', e)
        }, 500)
    }
}
</script>

<style scoped>
.base-search {
    @apply mb-6 relative w-full md:max-w-sm
}

.base-search__input {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
}

.base-search__loading {
    @apply absolute top-0 end-0 p-2.5 h-full text-sm font-medium rounded-e-lg
}
</style>