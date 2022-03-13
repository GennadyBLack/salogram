<template class="wrapper">
  <v-form v-slot="{ handleSubmit }">
    <base-card>
      <div class="form">
        <div class="row">
          <v-input-field
            v-model="register_form.email"
            :rules="{ required: true }"
            :placeholder="'Логин'"
            name="mail"
            :class="'col-12 form-field'"
            label="Логин: "
            mode="underline"
          />
        </div>
        <div class="row">
          <v-input-field
            v-model="register_form.password"
            :rules="{ required: true }"
            :placeholder="'Пароль'"
            name="password"
            :class="'col-12 form-field'"
            label="Пароль: "
            mode="underline"
          />
        </div>

        <div class="row">
          <v-input-field
            v-model="register_form.username"
            :rules="{ required: true }"
            :placeholder="'Имя'"
            name="password"
            :class="'col-12 form-field'"
            label="Имя: "
            mode="underline"
          />
        </div>

        <div class="controls">
          <base-button @click="setDataForm" extend-class="lg" mode="outline">test</base-button>
          <base-button @click="handleSubmit(register)" extend-class="lg" mode="full">
            Register
          </base-button>
        </div>
      </div>
    </base-card>
  </v-form>
</template>
<script setup>
import useRegister from '../../composables/authComposables/register'
const { register, register_form, editField } = useRegister()
const setDataForm = () => {
  editField('email', 'adminus@mail.ru')
  editField('password', 'adminus')
  editField('username', 'adminus')
}
</script>
//register_form
