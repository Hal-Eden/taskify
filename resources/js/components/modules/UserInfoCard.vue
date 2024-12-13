<template>
    <base-card>
        <div class="flex flex-col items-center">
            <h2 class="text-2xl font-bold dark:text-white mb-2 uppercase">{{ user.name }}</h2>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</span>
            <span class="mt-1">
                <base-badge color="dark">ID: {{ user.id }}</base-badge>
            </span>
            
            <div class="flex mt-6">
                <router-link :to="{ name: 'user-edit', params: { userId: user.id } }">
                    <base-button>Edit</base-button>
                </router-link>
                <base-button color="red" @click="openModal">Delete</base-button>
            </div>

            <hr class="w-full h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">
            <h4 class="text-2xl font-bold dark:text-white">Tasks</h4>
            <div class="text-center mt-3" v-if="user.tasks">
                <base-badge color="dark">Total: {{ statuses.total }}</base-badge>
                <base-badge color="green">Completed: {{ statuses.completed }}</base-badge>
                <base-badge color="red">Stale: {{ statuses.stale }}</base-badge>
                <base-badge color="default">Pending: {{ statuses.pending }}</base-badge>
            </div>
            <div class="flex mt-6">
                <router-link :to="{ name: 'user-tasks', params: { userId: user.id } }">
                    <base-button>View</base-button>
                </router-link>
                <router-link :to="{ name: 'task-create-user', params: { userId: user.id } }">
                    <base-button>Create</base-button>
                </router-link>
            </div>
        </div>
        <delete-user-modal @confirm-modal="deleteUser"></delete-user-modal>
    </base-card>
</template>

<script>
import DeleteUserModal from './DeleteUserModal.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: { DeleteUserModal },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        defaultStatuses: {
            total: 0,
            pending: 0,
            completed: 0,
            stale: 0,
        }
    }),
    methods: {
        ...mapActions('users', ['delete']),
        ...mapActions(['toggleModal']),
        openModal() {
            this.toggleModal(true);
        },
        async deleteUser() {
            const userId = this.$route.params.userId;

            await this.delete(userId).then(() => {
                this.$router.push({ name: 'users' });
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                this.toggleModal(false);
            })
        }
    },
    computed: {
        ...mapGetters(['modalIsOpen']),
        statuses() {
            if (!this.user) {
                return { ...this.defaultStatuses }
            }

            const statuses = this.user.tasks.reduce(function (acc, curr) {
                if (acc[curr.status]) {
                    acc[curr.status]++;
                } else {
                    acc[curr.status] = 1;
                }
                return acc;
            }, { ...this.defaultStatuses });

            return {
                ...statuses,
                total: this.user.tasks.length,
            }
        }
    }
}
</script>