import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  // Fetch user data from localStorage on mount
  onMounted(() => {
    const authUser = localStorage.getItem('auth_user')
    if (authUser) {
      user.value = JSON.parse(authUser) // Assuming it's stored as a JSON string
    }
  })

  // Getter to check if user is logged in
  const isLoggedIn = computed(() => user.value !== null)

  // Update user data and save it to localStorage
  function setUser(newUser) {
    user.value = newUser
    localStorage.setItem('auth_user', JSON.stringify(newUser))
  }

  // Remove user data and clear it from localStorage
  function logout() {
    user.value = null
    localStorage.removeItem('auth_user')
    localStorage.removeItem('token')
  }

  return { user, isLoggedIn, setUser, logout }
})
