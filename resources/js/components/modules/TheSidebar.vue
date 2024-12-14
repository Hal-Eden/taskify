<template>
   <aside :class="classNames" aria-label="Sidebar">
      <div class="sidebar__links">
         <ul class="space-y-2 font-medium">
            <li>
               <router-link class="sidebar__link" :to="{ name: 'dashboard' }">
                  <base-icon icon="stats"></base-icon>
                  <span class="ms-3">Stats</span>
               </router-link>
            </li>
            <li>
               <router-link class="sidebar__link" :to="{ name: 'tasks' }">
                  <base-icon icon="tasks"></base-icon>
                  <span class="ms-3">Tasks</span>
               </router-link>
            </li>
            <li v-if="isAdmin">
               <router-link class="sidebar__link" :to="{ name: 'users' }">
                  <base-icon icon="users"></base-icon>
                  <span class="ms-3">Users</span>
               </router-link>
            </li>
            <hr>
            <li v-if="isAdmin">
               <router-link class="sidebar__link" :to="{ name: 'user-create' }">
                  <base-icon icon="new-user"></base-icon>
                  <span class="ms-3">Create User</span>
               </router-link>
            </li>
            <li>
               <router-link class="sidebar__link" :to="{ name: 'task-create' }">
                  <base-icon icon="calendar"></base-icon>
                  <span class="ms-3">Create Task</span>
               </router-link>
            </li>
            <hr>
            <li>
               <div @click="logoutUser" class="sidebar__link cursor-pointer" :to="{ name: 'user-create' }">
                  <base-icon icon="door"></base-icon>
                  <span class="ms-3">Logout</span>
               </div>
            </li>
         </ul>
      </div>
   </aside>
   <teleport to="body">
      <div @click="toggleSidebar()" :class="backdropClassnames"></div>
   </teleport>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
   computed: {
      ...mapGetters('auth', ['isAdmin']),
      ...mapGetters(['sidebarIsOpen']),
      classNames() {
         return `sidebar ${this.sidebarIsOpen ? 'sidebar-mobile' : ''}`
      },
      backdropClassnames() {
         return `backdrop ${this.sidebarIsOpen ? 'backdrop-mobile' : ''}`
      }
   },
   methods: {
      ...mapActions('auth', ['logout']),
      ...mapActions(['toggleSidebar']),
      async logoutUser() {
         await this.logout();

         this.$router.push({ name: 'login' });
      },
   },
}
</script>

<style scoped>
.sidebar-enter-active {
   animation: sidebar 0.3s ease-out;
}

.sidebar-leave-active {
   animation: sidebar 0.3s ease-in reverse;
}

.router-link-active {
   @apply bg-gray-100;
}

.sidebar {
   @apply -translate-x-full duration-300 sm:block select-none fixed top-14 left-0 z-20 w-64 h-screen sm:translate-x-0
}

.sidebar__links {
   @apply h-full px-3 py-4 overflow-y-auto bg-gray-50
}

.sidebar__link {
   @apply flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100
}

.sidebar-mobile {
   @apply translate-x-0;
}

.backdrop {
   @apply opacity-0 transition duration-300 bg-gray-900/50 fixed inset-0 z-0 sm:hidden pointer-events-none
}

.backdrop-mobile {
   @apply opacity-100 z-10 pointer-events-auto
}

@keyframes sidebar {
   from {
      opacity: 0;
      transform: translateX(-100%);
   }

   to {
      opacity: 1;
      transform: translateX(0);
   }
}
</style>