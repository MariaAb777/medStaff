<template>
    <table class="min-w-full table-auto border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th v-for="(column, index) in columns" :key="index" class="p-2 text-left font-semibold">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" class="border-t">
          <td class="p-2">{{ item.name }}</td>
          <td class="p-2">{{ item.department }}</td>
          <td v-if="item.isHead !== undefined" class="p-2">{{ item.isHead ? 'Да' : 'Нет' }}</td>
          <td class="p-2">
            <button @click="editItem(item)" class="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded">Редактировать</button>
          </td>
          <td class="p-2">
            <button @click="deleteItem(item.id)" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
import { Doctor, Nurse } from '../store/types';
  
  // Define the props for the component
  const props = defineProps({
    columns: {
      type: Array as () => string[],
      required: true,
    },
    items: {
      type: Array as () => Array<{ id: number; name: string; department: string; isHead?: boolean }>,
      required: true,
    },
  });

  const emit = defineEmits<{
  (event: 'edit', item: { id: number; name: string; department: string; isHead?: boolean }): void;
  (event: 'delete', id: number): void;
}>();
  
  const editItem = (item: Doctor | Nurse) => {
    emit('edit', item);
  };
  
  const deleteItem = (id: number) => {
    console.log('Удалить с ID:', id);
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  td {
    padding: 8px;
  }
  
  button {
    cursor: pointer;
  }
  </style>
  