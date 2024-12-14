<template>
  <nav class="nav">
    <div class="nav__wrapper">
      <div class="nav__container">
        <div class="nav__brand">
          <button @click="toggleSidebar()" aria-controls="logo-sidebar" type="button" class="burger">
            <span class="sr-only">Open sidebar</span>
            <base-icon icon="burger"></base-icon>
          </button>
          <router-link class="brand-link" :to="{ name: 'dashboard' }">
            <span class="brand-link__label">Taskify</span>
          </router-link>
        </div>
        <div class="flex items-center uppercase">
          <p v-if="isAuthenticated">
            {{ authUser.name }}
          </p>
          <router-link v-else-if="$route.name === 'register'" :to="{ name: 'login' }">Login</router-link>
          <router-link v-else :to="{ name: 'register' }">Register</router-link>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  mounted() {
    console.log(this.$route, this.$router)
  },
  computed: {
    ...mapGetters('auth', ['authUser', 'isAuthenticated']),
  },
  methods: {
    ...mapActions(['toggleSidebar', 'setSidebarState']),
    navigateTo(path) {
      this.$router.push(path);
      setSidebarState(false);
    }
  }
}
</script>

<style scoped>
.nav {
  @apply select-none fixed top-0 z-30 w-full bg-white border-b border-gray-200
}

.nav__wrapper {
  @apply px-3 py-3 lg:px-5 lg:pl-3
}

.nav__container {
  @apply flex items-center justify-between
}

.nav__brand {
  @apply flex items-center justify-start rtl:justify-end
}

.burger {
  @apply inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none
}

.brand-link {
  @apply flex ms-2 md:me-24
}

.brand-link__label {
  @apply self-center text-xl font-semibold sm:text-2xl whitespace-nowrap
}
</style>