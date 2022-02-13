
<template>
<h1> This Is The About Page</h1>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup () {
    const state = {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
    const rules = {
      firstName: { required }, // Matches state.firstName
      lastName: { required }, // Matches state.lastName
      contact: {
        email: { required, email } // Matches state.contact.email
      }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  }
}

</script>