<template>
  <el-container class="h-screen">
    <!-- Sidebar -->
    <transition name="slide-sidebar">
       <el-aside  class="select-none"  :class="['flex flex-col ' +
        'transition-all duration-300  bg-white inset-y-0 left-0',
         sidebarOpen ? (isDesktop ? 'w-72' : '!w-full fixed top-0 left-0 z-10') : isDesktop ? '!w-20' : '!w-0']">
      <div v-if="sidebarOpen || isDesktop"  
      class="p-4 text-center gap-1  flex items-center justify-center min-w-[120px]">
        <img v-if="isDataReady" :src="`${api.baseURL+userStore.user.org_info.photo.path}`" alt="Logo"
        class="!w-16 !h-16 rounded-full mb-2 min-w-16 min-h-16" />
        <span v-if="sidebarOpen && isDataReady" class="text-xl font-bold account-name" >{{userStore.user.org_info.org_name}}</span>
        <el-button class="md:hidden ml-2" @click="toggleSidebar" v-if="!isDesktop">
          <el-icon><Menu /></el-icon>
        </el-button>
      </div>
      <el-menu v-if="sidebarOpen || isDesktop" :default-active="activeMenu" class="h-full" router>
        <template v-for="menu in menus" :key="menu.index">
          <el-sub-menu v-if="menu.children" :index="menu.index">
            <template #title>
              <el-icon><component :is="menu.icon" /></el-icon>
              <span v-if="sidebarOpen">{{ menu.label }}</span>
            </template>
            <el-menu-item v-for="child in menu.children" :key="child.index" :index="child.index">
              <el-icon v-if="child.icon"><component :is="child.icon" /></el-icon>
              <span v-if="sidebarOpen">{{ child.label }}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="menu.index">
            <el-icon><component :is="menu.icon" /></el-icon>
            <span v-if="sidebarOpen">{{ menu.label }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    </transition>


    <el-container :class="['transition-all duration-300']">
      <!-- Top Bar -->
      <el-header class="bg-white flex justify-between items-center p-4 border-b shadow-md">
        <div class="flex items-center">
          <el-button class="md:hidden" @click="toggleSidebar">
            <el-icon><Menu /></el-icon>
          </el-button>
          <span class="text-lg font-bold">Шахсий кабинет</span>
        </div>
        <div class="flex items-center gap-4">
          <el-dropdown trigger="click" v-if="isDataReady">
            <el-avatar class="mr-4">{{ userStore.user.full_name[0] }}</el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item style="color: red; background: #ecd3d3" @click="logout">
                  <i class="fa fa-sign-out-alt mr-1"></i> Logout
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- Main Content -->
      <el-main class="p-6">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <el-loading :fullscreen="true" v-if="!isDataReady" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/stores/user.js'


import {useRouter} from 'vue-router'

const router = useRouter()
const userStore = useUserStore()


const user = userStore.user
console.log("user", user)

import { Menu, House, Document, Notebook, School,
  Setting, User, Calendar, Timer, Lock, Check, ForkSpoon, View } from '@element-plus/icons-vue';
import api from '@/services/api.js'
import { ElLoading } from 'element-plus'

const activeMenu = ref('home');
const darkMode = ref(false);
const isDataReady  = ref(false);
const language = ref('uz');
const username = ref('Jahon iqtisodiyoti va  diplomatiya universiteti');
const sidebarOpen = ref(true);
const isDesktop = ref(window.innerWidth >= 768);

const menus = ref([
  { index: 'dashboard', label: 'Бош ойна', icon: House },
  { index: 'children', label: 'Болалар', icon: User },
  { index: 'employees', label: 'Xodimlar', icon: School },
  { index: 'groups', label: 'Гуруҳлар', icon: Notebook },
  {
    index: 'education',
    label: 'Таълим жараёни',
    icon: Document,
    children: [
      { index: 'lessons', label: 'Дарслар', icon: Notebook },
      { index: 'activities', label: 'Фаолиятлар', icon: Calendar },
      { index: 'schedule', label: 'Жадвал', icon: Timer }
    ]
  },
  {
    index: 'attendance',
    label: 'Давомат',
    icon: Check,
    children: [
      { index: 'child-attendance', label: 'Бола давомати', icon: User },
      { index: 'teacher-attendance', label: 'Ўқитувчи давомати', icon: School }
    ]
  },
  {
    index: 'meals',
    label: 'Овқатланиш',
    icon: ForkSpoon,
    children: [
      { index: 'menu-plan', label: 'Меню режаси', icon: Document },
      { index: 'meal-tracking', label: 'Назорат', icon: View }
    ]
  },
  {
    index: 'settings',
    label: 'Созламалар',
    icon: Setting,
    children: [
      { index: 'profile', label: 'Профиль', icon: User },
      { index: 'roles', label: 'Роллар', icon: Lock },
      { index: 'preferences', label: 'Мосламалар', icon: Setting }
    ]
  }
]);


const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768;
  if (!isDesktop.value) {
    sidebarOpen.value = false;
  }
};

function logout() {
  console.log('logout')
  userStore.logout()
  router.push('/sign')
}


// Show loader while fetching data
let loadingInstance = null

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: 'Loading user data...',
  })

  setTimeout(() => {
    isDataReady.value = true
    console.log("user", user)
    loadingInstance.close() // Close loader once data is ready
  }, 100) // Simulating a delay, adjust to actual data fetching time
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>


/* Sidebar Transition */
.slide-sidebar-enter-active, .slide-sidebar-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-sidebar-enter-from, .slide-sidebar-leave-to {
  transform: translateX(-100%);
}

.account-name{
  text-align: start;
  /* display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden; */
}
</style>
