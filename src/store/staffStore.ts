import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Doctor, Nurse } from './types';


export const useStaffStore = defineStore('staff', {
  state: () => ({
    doctors: ref<Doctor[]>([]),
    nurses: ref<Nurse[]>([]),
  }),
  actions: {
    async fetchDoctors() {
      const response = await fetch('/src/data/doctors.json');
      if (response.ok) {
        const data = await response.json();
        this.doctors = data;
      } else {
        console.error('Failed to fetch doctors data');
      }
    },
    async fetchNurses() {
      const response = await fetch('/src/data/nurses.json');
      if (response.ok) {
        const data = await response.json();
        this.nurses = data;
      } else {
        console.error('Failed to fetch nurses data');
      }
    },
  },
});
