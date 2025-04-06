<template>
  <div class="p-6">
    <el-card shadow="never" class="rounded-xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Гуруҳлар рўйхати</h2>
        <el-button type="primary" @click="openAddGroupDialog">Янги гуруҳ қўшиш</el-button>
      </div>

      <!-- Groups Table -->
      <el-table :data="groups" style="width: 100%" border>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="Гуруҳ номи" />
        <el-table-column prop="description" label="Тавсиф" />
        <el-table-column label="Амаллар" width="160">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
            >
              Ўчириш
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Add/Edit Group Dialog -->
    <el-dialog
      title="Гуруҳ маълумотлари"
      v-model="dialogVisible"
      @close="resetForm"
      width="50%"
    >
      <el-form :model="currentGroup" ref="groupForm" label-width="100px">
        <el-form-item label="Гуруҳ номи" :rules="[{ required: true, message: 'Гуруҳ номини киритинг', trigger: 'blur' }]">
          <el-input v-model="currentGroup.name" placeholder="Гуруҳ номини киритинг" />
        </el-form-item>
        <el-form-item label="Тавсиф" :rules="[{ required: true, message: 'Тавсифни киритинг', trigger: 'blur' }]">
          <el-input v-model="currentGroup.description" placeholder="Тавсиф киритинг" />
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Бекор қилиш</el-button>
        <el-button type="primary" @click="handleSave">Сақлаш</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ElMessageBox, ElMessage, ElDialog, ElForm, ElInput, ElButton, ElLoading } from 'element-plus'
import api from '@/services/api.js'

const groups = ref([
  { id: 1, name: 'Гуруҳ A', description: 'Барча ёшдаги болалар учун' },
  { id: 2, name: 'Гуруҳ B', description: '4-5 ёшли болалар учун' },
  { id: 3, name: 'Гуруҳ C', description: '6-7 ёшли болалар учун' }
])

const dialogVisible = ref(false)
const currentGroup = ref({
  id: null,
  name: '',
  description: ''
})

function openAddGroupDialog() {
  currentGroup.value = { id: null, name: '', description: '' }
  dialogVisible.value = true
}

function openEditGroupDialog(group) {
  currentGroup.value = { ...group }
  dialogVisible.value = true
}

function resetForm() {
  currentGroup.value = { id: null, name: '', description: '' }
}

function handleSave() {
  if (!currentGroup.value.name || !currentGroup.value.description) {
    ElMessage.error('Барча майдонлар тўлдирилиши керак!')
    return
  }

  if (currentGroup.value.id) {
    // Editing an existing group
    const index = groups.value.findIndex(g => g.id === currentGroup.value.id)
    if (index !== -1) {
      groups.value[index] = { ...currentGroup.value }
      ElMessage.success('Гуруҳ маълумотлари янгиланди!')
    }
  } else {
    api.post('/groups/create', currentGroup.value).then(async (res) => {
      console.log(res.data)
      ElMessage.success('Янги гуруҳ қўшилди!')
      await fetchGroups()
    })

  }

  dialogVisible.value = false
}

let loadingInstance = null
async function fetchGroups() {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: 'Loading group data...',
  })
  const res = await api.get('/groups')
  console.log("res", res)
  groups.value = res.data.result
  loadingInstance.close()
}

onMounted(async () => {
  await fetchGroups()
})

function handleDelete(group) {
  ElMessageBox.confirm(
    `Ҳақиқатан ҳам ${group.name} гуруҳини ўчиришни хоҳлайсизми?`,
    'Огоҳлантириш',
    {
      confirmButtonText: 'Ҳа',
      cancelButtonText: 'Йўқ',
      type: 'warning'
    }
  )
    .then(async () => {
      await api.delete(`groups/delete/${group.id}`)
      groups.value = groups.value.filter(g => g.id !== group.id)
      ElMessage.success('Ўчирилди!')
    })
    .catch(() => {
      ElMessage.info('Бекор қилинди')
    })
}
</script>

<style scoped>
.el-card {
  background-color: #ffffff;
}
</style>
