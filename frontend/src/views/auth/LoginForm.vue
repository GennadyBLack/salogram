<template>
  <div>
    <v-form v-slot="{ handleSubmit }">
      <div class="form w-40">
        <v-input-field
          v-model="login_form.email"
          :rules="{ required: true }"
          :placeholder="'Логин'"
          name="mail"
          :class="' form-field'"
          label="Логин: "
        />
        <v-input-field
          v-model="login_form.password"
          :rules="{ required: true }"
          :placeholder="'Пароль'"
          name="password"
          :class="' form-field'"
          label="Пароль: "
        />
        <div class="form-btns">
          <button @click="setDataForm" class="form-field btn">test</button>
          <button @click="handleSubmit(login)" class="form-field btn">
            Login
          </button>
        </div>
      </div>
    </v-form>
  </div>
</template>
<script setup>
import useLogin from '../../composables/authComposables/login'
const { login, login_form, editField } = useLogin()
const setDataForm = () => {
  editField('email', 'adminus@mail.ru')
  editField('password', 'adminus')
}
</script>
<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
