<template>
    <base-card>
        <div class="flex flex-col items-center select-none">
            <h2 class="title">{{ task.title }}</h2>
            <span class="info-line">{{ task.due_date }}</span>
            <span class="mt-1">
                <base-badge :color="colorByStatus(task.status)">{{ task.status }}</base-badge>
            </span>
            <span v-if="isAdmin && task.user" class="mt-1 info-line">
                {{ $t('tasks.user') }}
                <router-link class="underline hover:no-underline" :to="{ name: 'user', params: { userId: task.user.id } }">{{ task.user.name }}</router-link>
            </span>
            <div class="flex mt-6">
                <router-link :to="{ name: 'task-edit', params: { taskId: task.id } }">
                    <base-button>{{ $t('tasks.edit') }}</base-button>
                </router-link>
                <base-button color="red" @click="openModal">{{ $t('tasks.delete') }}</base-button>
            </div>
        </div>
        <delete-task-modal @confirm-modal="deleteTask"></delete-task-modal>
    </base-card>
</template>

<script>
import DeleteTaskModal from './DeleteTaskModal.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { DeleteTaskModal },
    props: {
        task: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapActions('tasks', ['delete']),
        ...mapActions(['toggleModal']),
        openModal() {
            this.toggleModal(true);
        },
        async deleteTask() {
            const taskId = this.$route.params.taskId;

            await this.delete({ taskId: taskId }).then(() => {
                this.$router.push({ name: 'tasks' });
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                this.toggleModal(false);
            })
        },
        colorByStatus(status) {
            const baseColors = {
                completed: 'green',
                stale: 'red',
                pending: 'default',
            }

            return baseColors[status];
        }
    },
    computed: {
        ...mapGetters(['modalIsOpen']),
        ...mapGetters('auth', ['isAdmin']),
    }
}
</script>

<style scoped>
.title {
    @apply text-2xl font-bold dark:text-white mb-2 uppercase
}

.info-line {
    @apply text-sm text-gray-500 dark:text-gray-400
}
</style>