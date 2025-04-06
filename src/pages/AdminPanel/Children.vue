<template>
  <div class="p-6">
    <el-card shadow="never" class="rounded-xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Болалар рўйхати</h2>
        <el-button type="primary" @click="openAddChildDialog">Yangi bola qo'shish</el-button>
      </div>

      <!-- Children Table -->
      <el-table :data="children" style="width: 100%" border>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="full_name" label="ФИО" />
        <el-table-column prop="organization_info" label="Bog'cha tashkiloti">
          <template #default="{ row }">
            <div class="flex items-center space-x-3">
              <el-avatar
                :src="`${api.baseURL}/${row.organization_photo.path}`"
                size="small"
                shape="circle"
                alt="Company Avatar"
              >
                {{ row.organization_name?.charAt(0) }}
              </el-avatar>
              <span class="font-medium">{{ row.organization_name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="Ёши" width="100" />
        <el-table-column prop="group_name" label="Гуруҳи" />
        <el-table-column prop="gender" label="Жинси" width="120" />
        <el-table-column prop="parent_name" label="Ота-онаси" />
        <el-table-column label="Амаллар" width="160">
          <template #default="scope">
            <el-button size="small" type="primary" @click="openEditChildDialog(scope.row)">
              Таҳрирлаш
            </el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">
              Ўчириш
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Add/Edit Child Dialog -->
    <el-dialog title="Бола маълумотлари" v-model="dialogVisible" @close="resetForm" width="50%">
      <el-form :model="currentChild" ref="childForm" label-width="100px">
        <el-form-item
          label="ФИО"
          :rules="[{ required: true, message: 'ФИОни киритинг', trigger: 'blur' }]"
        >
          <el-input v-model="currentChild.full_name" placeholder="ФИО киритинг" />
        </el-form-item>
        <el-form-item
          label="Ёши"
          :rules="[{ required: true, message: 'Ёшни киритинг', trigger: 'blur' }]"
        >
          <el-input-number v-model="currentChild.age" :min="1" :max="7" />
        </el-form-item>
        <el-form-item
          label="Гуруҳи"
          :rules="[{ required: true, message: 'Гуруҳни танланг', trigger: 'blur' }]"
        >
          <el-select v-model="currentChild.group_id" placeholder="Гуруҳни танланг" filterable>
            <el-option v-for="group in groups" :label="group.name" :value="group.id" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="Жинси"
          :rules="[{ required: true, message: 'Жинсни танланг', trigger: 'change' }]"
        >
          <el-radio-group v-model="currentChild.gender">
            <el-radio label="Ўғил" value="1">Ўғил</el-radio>
            <el-radio label="Қиз" value="2">Қиз</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="Ота-онаси"
          :rules="[{ required: true, message: 'Ота-онасининг исмини киритинг', trigger: 'blur' }]"
        >
          <el-input v-model="currentChild.parent_name" placeholder="Ота-онаси" />
        </el-form-item>
        <el-form-item
          label="Ota-onasi email"
          :rules="[{ required: true, message: 'Ota-onasining emailini kiriting', trigger: 'blur' }]"
        >
          <el-input v-model="currentChild.parent_email" placeholder="Ota-onasi email" />
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
import {
  ElMessageBox,
  ElMessage,
  ElDialog,
  ElForm,
  ElInput,
  ElButton,
  ElRadioGroup,
  ElRadio,
  ElInputNumber,
  ElLoading,
} from 'element-plus'
import api from '@/services/api.js'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

const children = ref([])

const dialogVisible = ref(false)
const currentChild = ref({
  id: null,
  full_name: '',
  age: null,
  gender: '',
  group_id: '',
  parent_name: '',
  parent_email: '',
  org_id: '',
})

const groups = ref([])

async function openAddChildDialog() {
  currentChild.value = {
    id: null,
    full_name: '',
    age: null,
    gender: '',
    group_id: '',
    parent_name: '',
    parent_email: '',
    org_id: userStore.user.id,
  }
  let res = await api.get('/groups')
  groups.value = res.data.result
  dialogVisible.value = true
}

function openEditChildDialog(child) {
  currentChild.value = { ...child }
  dialogVisible.value = true
}

function resetForm() {
  currentChild.value = {
    id: null,
    full_name: '',
    age: null,
    gender: '',
    group_id: '',
    parent_name: '',
  }
}

async function handleSave() {
  if (
    !currentChild.value.full_name ||
    !currentChild.value.age ||
    !currentChild.value.group_id ||
    !currentChild.value.gender ||
    !currentChild.value.parent_name
  ) {
    ElMessage.error('Барча майдонлар тўлдирилиши керак!')
    return
  }

  if (currentChild.value.id) {
    // Editing an existing child
    const index = children.value.findIndex((c) => c.id === currentChild.value.id)
    if (index !== -1) {
      children.value[index] = { ...currentChild.value }
      ElMessage.success('Бола маълумотлари янгиланди!')
    }
  } else {
    // Adding a new child
    api.post('/children/create', currentChild.value)
    currentChild.value.id = Date.now() // temporary unique id
    children.value.push({ ...currentChild.value })
    ElMessage.success('Янги бола қўшилди!')
    await fetchChildren()
  }

  dialogVisible.value = false
}

function handleDelete(child) {
  ElMessageBox.confirm(
    `Ҳақиқатан ҳам ${child.full_name} ни ўчиришни хоҳлайсизми?`,
    'Огоҳлантириш',
    {
      confirmButtonText: 'Ҳа',
      cancelButtonText: 'Йўқ',
      type: 'warning',
    },
  )
    .then(() => {
      children.value = children.value.filter((c) => c.id !== child.id)
      ElMessage.success('Ўчирилди!')
    })
    .catch(() => {
      ElMessage.info('Бекор қилинди')
    })
}

let loadingInstance = null

async function fetchChildren() {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: 'Loading children data...',
  })
  const response = await api.get(
    `/children?user_type=${userStore.user.user_type}&org_id=${userStore.user.id}&parent_email=${userStore.user.email}`,
  )
  children.value = response.data.result
  loadingInstance.close()
}
onMounted(() => {
  setTimeout(() => {
    fetchChildren()
  }, 100)
})
</script>

<style scoped>
.el-card {
  background-color: #ffffff;
}
</style>
