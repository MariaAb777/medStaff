<template>
  <div>
    <h1 class="text-2xl my-4">Список медсестер</h1>
    <Table
      :columns="columns"
      :items="store.nurses"
      @edit="editNurse"
      @delete="deleteNurse"
    />
    <EditNurseModal
      :isOpen="isEditModalOpen"
      :item="selectedNurse"
      @save="saveNurse"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Table from "../components/Table.vue";
import { useStaffStore } from "../store/staffStore";
import { Nurse } from "../store/types";
import EditNurseModal from "../components/EditNurseModal.vue";

const isEditModalOpen = ref(false);
const selectedNurse = ref<Nurse | null>(null);

const store = useStaffStore();

const columns = ["ФИО", "Отделение", "✎", '🗑️'];

const editNurse = (nurse: Nurse) => {
  selectedNurse.value = nurse;
  isEditModalOpen.value = true;
};

const saveNurse = (updatedNurse: Nurse) => {
  const index = store.nurses.findIndex((nurse) => nurse.id === updatedNurse.id);
  if (index !== -1) {
    store.nurses[index] = updatedNurse;
  }
  closeModal();
};

const closeModal = () => {
  isEditModalOpen.value = false;
  selectedNurse.value = null;
};

const deleteNurse = (id: number) => {
  store.nurses = store.nurses.filter((nurse) => nurse.id !== id);
};

onMounted(() => {
  store.fetchNurses();
});
</script>
