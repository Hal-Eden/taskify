<template>
    <base-form @form-action="submitForm">
        <base-input v-for="input in inputs" 
            :key="input.name"
            @input-action="updateInput" 
            :value="input.value" 
            :name="input.name" 
            :type="input.type" 
            :label="input.label"
            :options="input.options"
            :placeholder="input.placeholder" />
        <base-button type="submit">{{ buttonLabel }}</base-button>
    </base-form>
</template>

<script>

export default {
    emits: ['update-inputs', 'confirm-form'],
    props: {
        inputs: {
            type: Array,
            required: true,
        },
        buttonLabel: {
            type: String,
            required: true,
        }
    },
    methods: {
        updateInput(e, name) {
            const oldInputs = JSON.parse(JSON.stringify(this.inputs));
            const inputIndex = oldInputs.findIndex(i => i.name === name);

            oldInputs[inputIndex].value = e.target.value;

            this.$emit('update-inputs', oldInputs);
        },
        async submitForm() {
            const values = {};

            this.inputs.forEach(i => {
                values[i.name] = i.value;
            })

            this.$emit('confirm-form', values);
        }
    }
}
</script>