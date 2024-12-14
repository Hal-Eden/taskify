<template>
    <transition name="backdrop">
        <div v-if="modalIsOpen" class="backdrop"></div>
    </transition>
    <transition name="modal">
        <div v-show="modalIsOpen" id="popup-modal" tabindex="-1" class="base-modal">
            <div class="base-modal__wrapper">
                <div class="base-modal__content">
                    <button type="button" @click="close" class="base-modal__button" data-modal-hide="popup-modal">
                        <base-icon icon="close"></base-icon>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <slot :close="close" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    emits: ['close-modal'],
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['modalIsOpen'])
    },
    methods: {
        ...mapActions(['toggleModal']),
        close() {
            this.toggleModal(false);
        }
    },
}
</script>

<style scoped>
.backdrop {
    @apply bg-gray-900/50 fixed inset-0 z-40
}

.base-modal {
    @apply flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full
}

.base-modal__wrapper {
    @apply relative p-4 w-full max-w-md max-h-full
}

.base-modal__content {
    @apply relative bg-white rounded-lg shadow dark:bg-gray-700
}

.base-modal__button {
    @apply absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center
}

.modal-enter-active {
  animation: modal 0.15s ease-out;
}

.modal-leave-active {
  animation: modal 0.15s ease-in reverse;
}

.backdrop-enter-active {
  animation: backdrop 0.15s linear;
}

.backdrop-leave-active {
  animation: backdrop 0.15s linear reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes backdrop {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>