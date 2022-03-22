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
            <base-button
              @click="setDataForm"
              extend-class="full full-blue lg"
              mode="full"
              >Admin</base-button
            >
            <base-button
              @click="setDataForm2"
              extend-class="full full-green lg"
              mode="full"
              >Chatter</base-button
            >
            <base-button
              @click="handleSubmit(login)"
              extend-class="full full-yellow lg"
              mode="outline"
            >
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
const setDataForm2 = () => {
  editField('email', 'p@gmail.com')
  editField('password', '123')
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
