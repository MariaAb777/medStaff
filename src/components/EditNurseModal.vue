<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded shadow-lg w-96">
      <h2 class="text-xl mb-4">Редактировать</h2>
      <form @submit.prevent="saveChanges">
        <div class="mb-4">
          <label for="name" class="block mb-2">ФИО</label>
          <input v-model="form.name" id="name" type="text" class="border border-gray-300 p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label for="department" class="block mb-2">Отделение</label>
          <select v-model="form.department" id="department" class="border border-gray-300 p-2 w-full" required>
            <option  disabled selected>Выберите отделение</option>
            <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
          </select>
        </div>
        <div class="flex justify-end space-x-4">
          <button type="button" @click="closeModal" class="text-gray-500">Закрыть</button>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Nurse } from '../store/types';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object as () => Nurse | null,
    required: true,
  },
});

const emit = defineEmits<{
  (event: 'save', item: Nurse): void;
  (event: 'close'): void;
}>();

const form = ref<Nurse>({
  id: 0,
  name: '',
  department: '',
});

const departments = ref<string[]>(['Хирургия', 'Кардиология']);

watch(() => props.item, (newItem) => {
  if (newItem) {
    form.value = { ...newItem };
  }
});

const saveChanges = () => {
  if (props.item) {
    emit('save', form.value);
    console.log(props.item)
  }
};

const closeModal = () => {
  emit('close');
};
</script>
