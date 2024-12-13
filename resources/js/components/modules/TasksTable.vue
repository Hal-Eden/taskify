<template>
    <base-table :columns="columns">
        <base-table-row v-for="item in items" :key="item.id">
            <base-table-data>
                <div class="text-base font-semibold">{{ item.id }}</div>
            </base-table-data>
            <base-table-data>
                <router-link :to="{ name: 'task', params: { taskId: item.id } }">
                    <div class="text-base font-semibold">{{ item.title }}</div>
                </router-link>
            </base-table-data>
            <base-table-data>
                <base-badge class="uppercase mx-0" :color="colorByStatus(item.status)">{{ item.status }}</base-badge>
            </base-table-data>
            <base-table-data>
                {{ item.due_date }}
            </base-table-data>
            <base-table-data>
                <router-link :to="{ name: 'task-edit', params: { taskId: item.id } }">
                    <button-icon-edit color="blue"></button-icon-edit>
                </router-link>
                <button-icon-delete @button-action="openModal(item.id)" color="red"></button-icon-delete>
            </base-table-data>
        </base-table-row>
    </base-table>
    <delete-task-modal @confirm-modal="deleteTask"></delete-task-modal>
</template>

<script>
import BaseTable from '../elements/BaseTable.vue';
import BaseTableRow from '../elements/BaseTableRow.vue';
import BaseTableData from '../elements/BaseTableData.vue';
import ButtonIconDelete from '../groups/ButtonIconDelete.vue';
import ButtonIconEdit from '../groups/ButtonIconEdit.vue';
import DeleteTaskModal from './DeleteTaskModal.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    emits: ['refresh-data'],
    components: { BaseTable, BaseTableRow, BaseTableData, ButtonIconDelete, ButtonIconEdit, DeleteTaskModal },
    props: {
        items: {
            type: Array,
            required: true,
        }
    },
    data: () => ({
        columns: [
            'ID', 'Title', 'Status', 'Due date', 'Actions'
        ],
        taskId: null,
    }),
    computed: {
        ...mapGetters(['modalIsOpen']),
        ...mapActions('auth', ['isAdmin', 'authUser']),
    },
    methods: {
        ...mapActions(['toggleModal', 'updateModalParams']),
        ...mapActions('tasks', ['getTasks', 'delete']),
        openModal(taskId) {
            this.taskId = taskId;
            this.toggleModal(true);
        },
        async deleteTask() {
            await this.delete({ taskId: this.taskId });

            this.$emit('refresh-data');
            this.toggleModal(false);

            this.taskId = null;
        },
        colorByStatus(status) {
            const baseColors = {
                completed: 'green',
                stale: 'red',
                pending: 'default',
            }

            return baseColors[status];
        }
    }
}
</script>