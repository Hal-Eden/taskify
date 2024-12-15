<template>
    <base-table :columns="columns">
        <base-table-row v-for="item in items" :key="item.id">
            <base-table-data>
                <router-link :to="{ name: 'task', params: { taskId: item.id } }">
                    <div :title="item.title" class="column-title">{{ item.title
                        }}</div>
                </router-link>
            </base-table-data>
            <base-table-data class="column-center">
                <base-badge class="badge-desktop" :color="colorByStatus(item.status)">{{
                    item.status }}</base-badge>
                <base-badge class="badge-mobile" :color="colorByStatus(item.status)">{{
                    item.status.slice(0, 1) }}</base-badge>
            </base-table-data>
            <base-table-data class="hidden md:table-cell w-30">
                {{ item.due_date }}
            </base-table-data>
            <base-table-data class="w-10 column-center">
                <router-link :to="{ name: 'task-edit', params: { taskId: item.id } }">
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
    <delete-task-modal @confirm-modal="deleteTask"></delete-task-modal>
</template>

<script>
import BaseTable from '../elements/BaseTable.vue';
import BaseTableRow from '../elements/BaseTableRow.vue';
import BaseTableData from '../elements/BaseTableData.vue';
import DeleteTaskModal from './DeleteTaskModal.vue';
import BaseButtonIcon from '../elements/BaseButtonIcon.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    emits: ['refresh-data'],
    components: { BaseTable, BaseTableRow, BaseTableData, BaseButtonIcon, DeleteTaskModal },
    props: {
        items: {
            type: Array,
            required: true,
        }
    },
    data: () => ({
        columns: [
            {
                label: 'tasks.title_label',
            },
            {
                label: 'tasks.status_label',
                classes: 'text-center md:text-left',
            },
            {
                label: 'tasks.due_date_label',
                classes: 'hidden md:table-cell',
            },
            {
                label: 'tasks.actions',
                classes: 'text-center md:text-left',
            }
        ],
        taskId: null,
    }),
    computed: {
        ...mapGetters(['modalIsOpen']),
    },
    methods: {
        ...mapActions(['toggleModal']),
        ...mapActions('tasks', ['delete']),
        openModal(taskId) {
            this.taskId = taskId;
            this.toggleModal(true);
        },
        async deleteTask() {
            await this.delete({ taskId: this.taskId });
            await this.$emit('refresh-data');

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

<style scoped>
.badge-desktop {
    @apply mx-0 hidden md:inline-block;
}

.badge-mobile {
    @apply mx-0 md:hidden;
}

.column-title {
    @apply text-base font-semibold overflow-hidden truncate w-36 lg:w-80;
}

.column-center {
    @apply text-center md:text-left;
}
</style>