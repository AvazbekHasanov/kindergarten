<template>
  <div>
    <h1>Tickets</h1>
   <el-button type="danger" @click="showToast">
     Salom
   </el-button>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';


import { useTickets } from '@/composables/useTickets';

const { tickets, loading, error, fetchTickets } = useTickets();

import { ElMessage } from 'element-plus'

import api from '@/services/api';


const showToast = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

onMounted(async () => {
  await fetchTickets();
});


</script>