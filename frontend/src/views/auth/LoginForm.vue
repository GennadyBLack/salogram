<template>
  <div>
    <v-form v-slot="{ handleSubmit }">
      <base-card extend-class="w-40">
        <div class="form">
          <v-input-field
            v-model="login_form.email"
            :rules="{ required: true }"
            :placeholder="'Логин'"
            name="mail"
            :class="' form-field'"
            label="Логин: "
            mode="underline"
          />
          <v-input-field
            v-model="login_form.password"
            :rules="{ required: true }"
            :placeholder="'Пароль'"
            name="password"
            :class="' form-field'"
            label="Пароль: "
            mode="underline"
          />
          <div class="controls">
            <base-button @click="setDataForm" extend-class="lg" mode="full">Test</base-button>
            <base-button @click="handleSubmit(login)" extend-class="lg" mode="outline">
              Login
            </base-button>
          </div>
        </div>
      </base-card>
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
  .form {
    width: 50%;
    margin: 0 auto;
  }
</style>
