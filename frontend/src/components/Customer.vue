<template>
  <div v-if="customer">
    <error-boundary>
      <h4>Customer</h4>
      {{ customer.title }}
      <div><label>Name: </label> {{ customers.titleв }}</div>
      <div><label>description: </label> {{ customers.description }}</div>
      <div><label>Active: </label> {{ customers.active }}</div>
    </error-boundary>
    <span
      v-if="this.customer.active"
      v-on:click="updateActive(false)"
      class="button is-small btn-primary"
      >Inactive</span
    >
    <span
      v-else
      v-on:click="updateActive(true)"
      class="button is-small btn-primary"
      >Active</span
    >

    <span class="button is-small btn-danger" v-on:click="deleteCustomer()"
      >Delete</span
    >
  </div>
  <div v-else>
    <br />
    <p>Please click on a Customer...</p>
  </div>
</template>

<script>
import { updateTask, deleteTask } from '../api/task'
export default {
  computed: {
    customers() {
      return JSON.parse(this.customer)
    },
  },
  name: 'customer',
  props: {
    customer: {
      type: String,
    },
  },
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.customer.id,
        title: this.customer.title,
        description: this.customer.active,
        active: status,
      }

      updateTask(this.customer.id, data)
        .then((response) => {
          console.log(response)
          // this.customer.active = response.data.active;
        })
        .catch((e) => {
          console.log(e)
        })
    },
    deleteCustomer() {
      deleteTask(id)
        .then((response) => {
          console.log(response.data)
          this.$emit('refreshData')
          this.$router.push('/')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    /* eslint-enable no-console */
  },
}
</script>
