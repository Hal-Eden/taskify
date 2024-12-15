<template>
    <base-table :columns="columns">
        <base-table-row v-for="item in items" :key="item.id">
            <base-table-data class="hidden md:table-cell">
                <div class="text-base font-semibold">{{ item.id }}</div>
            </base-table-data>
            <base-table-data>
                <router-link :to="{ name: 'user', params: { userId: item.id } }">
                    <div class="column-name short">{{ item.name }}</div>
                    <div class="column-email short">{{ item.email }}</div>
                </router-link>
            </base-table-data>
            <base-table-data class="text-center w-52">
                <router-link :to="{ name: 'user-tasks', params: { userId: item.id } }">
                    {{ item.tasks.length }}
                </router-link>
            </base-table-data>
            <base-table-data class="text-mobile w-10">
                <router-link :to="{ name: 'user-edit', params: { userId: item.id } }">
                    <base-button-icon color="blue">
                        <base-icon icon="edit"></base-icon>
                    </base-button-icon>
                </router-link>
                <base-button-icon @button-action="openModal(item.id)" color="red">
                    <base-icon icon="trash"></base-icon>
                </base-button-icon>
            </base-table-data>
        </base-table-row>
    </base-table>
    <delete-user-modal @confirm-modal="deleteUser"></delete-user-modal>
</template>

<script>
import BaseTable from '../elements/BaseTable.vue';
import BaseTableRow from '../elements/BaseTableRow.vue';
import BaseTableData from '../elements/BaseTableData.vue';
import DeleteUserModal from './DeleteUserModal.vue';

import { mapActions, mapGetters } from 'vuex';
import BaseButtonIcon from '../elements/BaseButtonIcon.vue';

export default {
    emits: ['refresh-data'],
    components: { BaseTable, BaseTableRow, BaseTableData, DeleteUserModal, BaseButtonIcon },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        columns: [
            {
                label: 'users.table_id',
                classes: 'hidden md:table-cell',
            },
            {
                label: 'users.table_name',
            },
            {
                label: 'users.table_tasks',
                classes: 'text-center',
            },
            {
                label: 'users.table_actions',
                classes: 'text-center md:text-left',
            }
        ],
        userId: null,
    }),
    computed: {
        ...mapGetters(['modalIsOpen']),
    },
    methods: {
        ...mapActions(['toggleModal']),
        ...mapActions('users', ['delete']),
        openModal(userId) {
            this.userId = userId;
            this.toggleModal(true);
        },
        async deleteUser() {
            await this.delete({ userId: this.userId });
            await this.$emit('refresh-data');

            this.toggleModal(false);

            this.userId = null;
        }
    }
}
</script>

<style scoped>
.column-name {
    @apply text-base font-semibold overflow-hidden truncate w-36;
}

.column-email {
    @apply text-sm font-normal text-gray-500;
}

.short {
    @apply overflow-hidden truncate w-44 md:w-52 lg:w-96;
}

.text-mobile {
    @apply text-center md:text-left;
}
</style>