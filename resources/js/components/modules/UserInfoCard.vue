<template>
    <base-card>
        <div class="user-info">
            <h2 class="user-info__title">{{ user.name }}</h2>
            <span class="user-info__email">{{ user.email }}</span>
            <span class="mt-1">
                <base-badge color="dark">{{ this.$t('users.id') }} {{ user.id }}</base-badge>
            </span>

            <div class="flex mt-6">
                <router-link :to="{ name: 'user-edit', params: { userId: user.id } }">
                    <base-button>Edit</base-button>
                </router-link>
                <base-button color="red" @click="openModal">{{ this.$t('users.delete') }}</base-button>
            </div>

            <hr class="hr">
            <h4 class="text-2xl font-bold">{{ this.$t('users.tasks') }}</h4>
            <div class="text-center mt-3" v-if="user.tasks">
                <base-badge color="dark">{{ this.$t('users.total') }} {{ statuses.total }}</base-badge>
                <base-badge color="green">{{ this.$t('users.completed') }} {{ statuses.completed }}</base-badge>
                <base-badge color="red">{{ this.$t('users.stale') }} {{ statuses.stale }}</base-badge>
                <base-badge color="default">{{ this.$t('users.pending') }} {{ statuses.pending }}</base-badge>
            </div>
            <div class="flex mt-6">
                <router-link :to="{ name: 'user-tasks', params: { userId: user.id } }">
                    <base-button>{{ this.$t('users.view') }}</base-button>
                </router-link>
                <router-link :to="{ name: 'task-create-user', params: { userId: user.id } }">
                    <base-button>{{ this.$t('users.create') }}</base-button>
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

            await this.delete({ userId }).then(() => {
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

<style scroped>
.user-info {
    @apply flex flex-col items-center select-none
}

.user-info__title {
    @apply text-2xl font-bold mb-2 uppercase
}

.user-info__email {
    @apply text-sm
}

.hr {
    @apply w-full h-px my-3 bg-gray-200 border-0
}
</style>