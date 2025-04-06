<template>
  <div class="p-6">
    <el-card shadow="never" class="rounded-xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Xodimlar ro'yxati</h2>
        <el-button type="primary" @click="openAddEmployeeDialog">Yangi xodim qo'shish</el-button>
      </div>

      <!-- Employees Table -->
      <el-table :data="employees" style="width: 100%" border
                show-summary
                :summary-method="getSummaries" >
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="full_name" label="FISH" />
        <el-table-column prop="degree" label="Darajasi" />
        <el-table-column prop="position_id" label="Lavozim" />
        <el-table-column prop="salary" label="Maosh" width="160" />
        <el-table-column label="Amallar" width="160">
          <template #default="scope">
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">
              Ўчириш
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Add/Edit Employee Dialog -->
    <el-dialog
      title="Xodim ma'lumotlari"
      v-model="dialogVisible"
      @close="resetForm"
      width="50%"
    >
      <el-form :model="currentEmployee" ref="employeeForm" label-width="120px">
        <el-form-item label="F.I.Sh" prop="full_name" :rules="[{ required: true, message: 'Ism familyani kiriting', trigger: 'blur' }]">
          <el-input v-model="currentEmployee.full_name" placeholder="Xodim ismi" />
        </el-form-item>
        <el-form-item label="Email adress" prop="email" :rules="[{ required: true, message: 'Xodim email addresi', trigger: 'blur' }]">
          <el-input v-model="currentEmployee.email" placeholder="Xodim email addresi" />
        </el-form-item>
        <el-form-item label="Lavozimi" prop="position_id">
          <el-select v-model="currentEmployee.position_id" placeholder="Xodim lavozimi" clearable>
            <el-option
              v-for="position in positions"
              :key="position.id"
              :label="position.name"
              :value="position.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Darajasi" prop="degree">
          <el-input v-model="currentEmployee.degree" placeholder="Darajasini kiriting" />
        </el-form-item>
        <el-form-item label="Maosh" prop="salary">
          <el-input v-model="currentEmployee.salary" placeholder="Maoshini kiriting" />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="dialogVisible = false">Бекор қилиш</el-button>
        <el-button type="primary" @click="handleSave">Сақлаш</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessageBox, ElMessage, ElLoading } from 'element-plus'
import { useUserStore } from '@/stores/user.js'
import api from '@/services/api.js'

const userStore = useUserStore()
const employees = ref([])

const dialogVisible = ref(false)
const currentEmployee = ref({
  id: null,
  full_name: '',
  degree: '',
  salary: null,
  org_id: null,
  position_id: '',
  email: ''
})

const positions = ref([])

async function openAddEmployeeDialog() {
  currentEmployee.value = {
    id: null,
    full_name: '',
    degree: '',
    salary: null,
    org_id: userStore.user.id
  }
  let response = await api.get('/positions')
  console.log("response", response)
  positions.value = response.data.result
  dialogVisible.value = true
}

function resetForm() {
  currentEmployee.value = {
    id: null,
    full_name: '',
    degree: '',
    salary: null,
    org_id: userStore.user.id
  }
}

function getSummaries(param) {
  const { columns, data } = param
  const sums = []

  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = 'Жами'
      return
    }

    const prop = column.property
    if (prop === 'salary') {
      const total = data.reduce((sum, row) => {
        const val = Number(row[prop])
        return sum + (isNaN(val) ? 0 : val)
      }, 0)
      sums[index] = total.toLocaleString()
    } else {
      sums[index] = ''
    }
  })

  return sums
}


function handleSave() {
  const { full_name, degree, salary } = currentEmployee.value
  if (!full_name || !degree || !salary) {
    ElMessage.error('Барча майдонлар тўлдирилиши керак!')
    return
  }

  if (currentEmployee.value.id) {
    // Edit employee
    api.put(`/employees/update/${currentEmployee.value.id}`, currentEmployee.value).then(async () => {
      ElMessage.success("Xodim ma'lumotlari yangilandi!")
      await fetchEmployees()
    })
  } else {
    // Add new employee
    api.post('/emp/create', currentEmployee.value).then(async () => {
      ElMessage.success("Yangi xodim qo'shildi!")
      await fetchEmployees()
    })
  }

  dialogVisible.value = false
}

let loadingInstance = null
async function fetchEmployees() {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: 'Ma\'lumotlar yuklanmoqda...',
  })
  let user = JSON.parse(localStorage.getItem('auth_user'))
  const res = await api.get('/emp?org_id='+user.id)
  employees.value = res.data.result
  loadingInstance.close()
}

function handleDelete(employee) {
  ElMessageBox.confirm(
    `Ҳақиқатан ҳам ${employee.full_name} ни ўчиришни хоҳлайсизми?`,
    'Огоҳлантириш',
    {
      confirmButtonText: 'Ҳа',
      cancelButtonText: 'Йўқ',
      type: 'warning'
    }
  ).then(async () => {
    await api.delete(`/emp/delete/${employee.id}`)
    employees.value = employees.value.filter(e => e.id !== employee.id)
    ElMessage.success('Ўчирилди!')
  }).catch(() => {
    ElMessage.info('Бекор қилинди')
  })
}

onMounted(fetchEmployees)
</script>

<style scoped>
.el-card {
  background-color: #ffffff;
}
</style>
