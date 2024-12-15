<template>
    <div>
        <base-header>{{ $t('pages.create_user') }}</base-header>
        <loading-wrapper>
            <user-form-create></user-form-create>
        </loading-wrapper>
    </div>
</template>

<script>
import UserFormCreate from '../components/modules/UserFormCreate.vue';

export default {
    components: { UserFormCreate },
}
</script>