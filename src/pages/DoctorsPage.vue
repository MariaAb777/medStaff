<template>
  <div>
    <h1 class="text-2xl my-4">Список врачей</h1>
    <Table
      :columns="columns"
      :items="store.doctors"
      @edit="editDoctor"
      @delete="deleteDoctor"
    />
    <EditDoctorModal
      :isOpen="isEditModalOpen"
      :item="selectedDoctor"
      @save="saveDoctor"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStaffStore } from "../store/staffStore";
import Table from "../components/Table.vue";
import EditDoctorModal from "../components/EditDoctorModal.vue";
import { Doctor } from "../store/types";

const store = useStaffStore();
const columns = ["ФИО", "Отделение", "Заведующий", "✎", '🗑️'];
const isEditModalOpen = ref(false);
const selectedDoctor = ref<Doctor | null>(null);

const editDoctor = (doctor: Doctor) => {
  selectedDoctor.value = doctor;
  isEditModalOpen.value = true;
};

const saveDoctor = (updatedDoctor: Doctor) => {
  const index = store.doctors.findIndex((doc) => doc.id === updatedDoctor.id);
  if (index !== -1) {
    store.doctors[index] = updatedDoctor;
  }
  closeModal();
};

const closeModal = () => {
  isEditModalOpen.value = false;
  selectedDoctor.value = null;
};

const deleteDoctor = (id: number) => {
  store.doctors = store.doctors.filter((doc) => doc.id !== id);
};

onMounted(() => {
  store.fetchDoctors();
});
</script>
