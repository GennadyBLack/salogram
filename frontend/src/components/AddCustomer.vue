<template>
  <div class="submitform">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Title</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required=""
          v-model="customer.title"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="desc">Desc</label>
        <input
          type="text"
          class="form-control"
          id="desc"
          required=""
          v-model="customer.description"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="age">Active</label>
        <input
          type="checkbox"
          class="form-control"
          id="age"
          required=""
          v-model="customer.active"
          name="age"
        />
      </div>
      <button v-on:click="saveCustomer" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCustomer">Add</button>
    </div>
  </div>
</template>

<script>
import { createTask } from '../api/task'
export default {
  name: 'add-customer',
  data() {
    return {
      customer: {
        id: 0,
        title: '',
        description: '',
        active: true,
      },
      submitted: false,
    }
  },
  methods: {
    /* eslint-disable no-console */
    saveCustomer() {
      var data = {
        title: this.customer.title,
        description: this.customer.description,
        active: this.customer.active,
      }

      createTask(data)
        .then((response) => {
          this.customer.id = response.data.id
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })

      this.submitted = true
    },
    newCustomer() {
      this.submitted = false
      this.customer = {}
    },
    /* eslint-enable no-console */
  },
}
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
