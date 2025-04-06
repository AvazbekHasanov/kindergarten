<script setup>
import { reactive, ref } from 'vue'
import api from '@/services/api.js'
import { useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user.js'

const formRef = ref()
const router = useRouter()
const userStore = useUserStore()

//registration
const form = reactive({
  full_name: '',
  email: '',
  password: '',
  user_type: '',
  avatar: '',
  photo: ''
})

const validateOrganizationEmail = (rule, value, callback) => {
  if (form.user_type === 'ORGANIZATION' && !value.endsWith('@organization.com')) {
    callback(new Error('Organization email must end with @organization.com'))
  } else {
    callback()
  }
}

const rules = {
  full_name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
  email: [
    { required: true, message: 'Please enter your email', trigger: 'blur' },
    { type: 'email', message: 'Email is not valid', trigger: 'blur' },
    { validator: validateOrganizationEmail, trigger: 'blur' },
  ],
  password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
  user_type: [{ required: true, message: 'Please select user type', trigger: 'change' }],
}

const submitForm = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const res = await api.post('/auth/register', form)
        console.log(res)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  })
}
const handleFileChange = (file) => {
  const formData = new FormData();
  formData.append('file', file.raw);

  // Send the file via an API POST request
  api.post('/upload', formData , {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then((response) => {
      console.log('File uploaded successfully', response);
      form.avatar = response.data; // Assuming the server returns the URL of the uploaded avatar
    })
    .catch((error) => {
      console.error('File upload failed', error);
      this.$message.error('Upload failed');
    });
};



//overal
const isRightPanelActive = ref(false)

const email = ref('')
const password = ref('')

const togglePanel = () => {
  isRightPanelActive.value = !isRightPanelActive.value
}


// login
const login = (e) => {
  e.preventDefault()
  console.log('e', email.value, password.value)
  api
    .post('/auth/login', {
      username: email.value,
      password: password.value,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.accessToken)
      userStore.setUser(res.data.userData)
      if (res.data.userData.user_type === 'ORGANIZATION') {
        router.push('/pages/dashboard')
      }else {
        router.push('/pages/cabinet')
      }

    })
}


</script>

<template>
  <div class="container" :class="{ 'right-panel-active': isRightPanelActive }" id="container">
    <div class="form-container sign-up-container">
      <el-form
        :model="form"
        :rules="rules"
        ref="formRef"
        label-position="left"
        class="max-w-xl m-auto p-10 shadow-2xl rounded-2xl space-y-6 bg-white flex gap-2"
      >
        <h1 class="text-3xl font-bold mb-2">Create Account</h1>
        <span class="text-gray-500 mb-4 block">or use your email for registration</span>

        <el-form-item label="Name" prop="name">
          <el-input v-model="form.full_name" placeholder="Name" />
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input v-model="form.email" placeholder="Email" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password" placeholder="Password" type="password" />
        </el-form-item>

        <el-form-item label="User Type" prop="user_type">
          <el-select v-model="form.user_type" placeholder="Select User Type">
            <el-option label="Individual" value="INDIVIDUAL" />
            <el-option label="Organization" value="ORGANIZATION" />
          </el-select>
        </el-form-item>
        <el-form-item label="Avatar">
          <el-upload
            ref="upload"

            list-type="picture-card"
            :auto-upload="false"
            :file-list="form.photo ? [form.photo] : []"
            accept="image/*"
            :limit="1"
            @change="handleFileChange"
          >
            <Plus />
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">Sign Up</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-container sign-in-container">
      <form @submit="login">
        <h1>Sign in</h1>

        <span>or use your account</span>
        <el-input type="email" class="auth-input" placeholder="Email" v-model="email" />
        <el-input
          class="auth-input"
          v-model="password"
          type="password"
          placeholder="Password"
          show-password
        />
        <button>Sign In</button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button class="ghost" id="signIn" @click="togglePanel">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button class="ghost" id="signUp" @click="togglePanel">Sign Up</button>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <p>
      Created with <i class="fa fa-heart"></i> by
      <a target="_blank" href="#">Arun</a>
      - Read how I created this and how you can join the challenge
      <a target="_blank" href="#">here</a>.
    </p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

/* Styles remain unchanged */
* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #59cb59;
  background-color: #59cb59;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  width: 60%;
  text-align: center;
}

.auth-input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  width: 100%;
  height: 4rem;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  display: flex;
  justify-content: center;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #59cb59;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>