<template>
  <div>
      <h2>Log In</h2>
      <Form @submit="onSubmit">
        <Field name="uid" :rules="{ required: true }" v-slot="{ field, errors }">
          <input v-bind="field" placeholder="Enter your ID" />
          <span>{{ errors[0] }}</span>
        </Field>
        <Field name="password" :rules="{ required: true, min: 6 }" v-slot="{ field, errors }">
          <input v-bind="field" placeholder="Enter your password" type="password" />
          <span>{{ errors[0] }}</span>
        </Field>
        <button type="submit">Login</button>
      </Form>
  </div>

  <div>
      <h2>Log In</h2>
      <div class="alert-danger" v-if="errorState"> <!-- errorState가 있으면 표시한다 -->
        <p>{{ errorState }}</p>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    uid: '',
    password: ''
  }),
  methods: {
    ...mapActions(['login']),
    async onSubmit (values) {
      const { uid, password } = values;
      try {
        let loginResult = await this.login({ uid, password });
        if (loginResult) this.goToPages();
      } catch (err) {
        console.error(err);
      }
    },
    goToPages () {
      this.$router.push({
        name: 'HelloWorld'
      });
    }
  },
  computed: {
    ...mapGetters({
      errorState: 'getErrorState'
    })
  }
}
</script>

<style scoped>
.alert-danger p {
  color: red;
}
</style>
