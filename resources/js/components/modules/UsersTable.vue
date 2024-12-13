<template>
    <base-table :columns="columns">
        <base-table-row v-for="item in items" :key="item.id">
            <base-table-data>
                <div class="text-base font-semibold">{{ item.id }}</div>
            </base-table-data>
            <base-table-data>
                <router-link :to="{ name: 'user', params: { userId: item.id } }">
                    <div class="text-base font-semibold uppercase">{{ item.name }}</div>
                    <div class="font-normal text-gray-500">{{ item.email }}</div>
                </router-link>
            </base-table-data>
            <base-table-data>
                <router-link :to="{ name: 'user-tasks', params: { userId: item.id } }">{{ item.tasks.length
                    }}</router-link>
            </base-table-data>
            <base-table-data>
                <router-link :to="{ name: 'user-edit', params: { userId: item.id } }">
                    <button-icon-edit color="blue"></button-icon-edit>
                </router-link>
                <button-icon-delete @button-action="openModal(item.id)" color="red"></button-icon-delete>
            </base-table-data>
        </base-table-row>
    </base-table>
    <delete-user-modal @confirm-modal="deleteUser"></delete-user-modal>
</template>

<script>
import BaseTable from '../elements/BaseTable.vue';
import BaseTableRow from '../elements/BaseTableRow.vue';
import BaseTableData from '../elements/BaseTableData.vue';
import ButtonIconDelete from '../groups/ButtonIconDelete.vue';
import ButtonIconEdit from '../groups/ButtonIconEdit.vue';
import DeleteUserModal from './DeleteUserModal.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    components: { BaseTable, BaseTableRow, BaseTableData, ButtonIconDelete, ButtonIconEdit, DeleteUserModal },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        columns: [
            'ID', 'Name', 'Tasks', 'Actions'
        ],
        userId: null,
    }),
    computed: {
        ...mapGetters(['modalIsOpen']),
    },
    methods: {
        ...mapActions(['toggleModal']),
        ...mapActions('users', ['getUsers', 'delete']),
        openModal(userId) {
            this.userId = userId;
            this.toggleModal(true);
        },
        async deleteUser() {
            await this.delete({ userId: this.userId });

            this.getUsers();
            this.toggleModal(false);

            this.userId = null;
        }
    }
}
</script>