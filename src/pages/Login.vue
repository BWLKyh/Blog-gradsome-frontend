<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/post-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>Sample Post</h1>
              <span class="subheading">Login or Sign up</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="my-5">
              <h1 class="text-xs-center">
                {{ isLogin ? 'Sign in' : 'Sign up' }}
              </h1>
              <p class="text-xs-center">
                <g-link v-if="isLogin" to="/register">Need an account?</g-link>
                <g-link v-else to="/login">Have an account?</g-link>
              </p>

              <ul class="error-messages">
                <template v-for="(messages, field) in errors">
                  <li v-for="(message, index) in messages" :key="index">
                    {{ field }} {{ message }}
                  </li>
                </template>
              </ul>
              <form @submit.prevent="onSubmit">
                <template v-if="isLogin">
                  <div class="form-floating">
                    <input
                      v-model="login.identifier"
                      class="form-control"
                      id="identifier"
                      type="text"
                      placeholder="Enter your name or Email ..."
                      required
                    />
                    <label for="name">Name/Email</label>
                  </div>
                  <div class="form-floating">
                    <input
                      v-model="login.password"
                      class="form-control"
                      id="password"
                      type="password"
                      placeholder="Password"
                      minlength="8"
                      required
                    />
                    <label for="phone">Password</label>
                  </div>
                </template>
                <template v-else>
                  <div class="form-floating">
                    <input
                      v-model="register.username"
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      required
                    />
                    <label for="name">Name</label>
                  </div>
                  <div class="form-floating">
                    <input
                      v-model="register.email"
                      class="form-control"
                      id="email"
                      type="email"
                      placeholder="Enter your email..."
                      required
                    />
                    <label for="email">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input
                      v-model="register.password"
                      class="form-control"
                      id="password"
                      type="password"
                      placeholder="Password"
                      minlength="8"
                      required
                    />
                    <label for="Password">Password</label>
                  </div>
                </template>
                <br />
                <button class="btn btn-primary text-uppercasez">
                  {{ isLogin ? 'Sign in' : 'Sign up' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import { signIn, signUp } from '/api/user'
export default {
  name: 'ContactPage',
  data() {
    return {
      register: {
        username: '',
        email: '',
        password: '',
      },
      login: {
        identifier: '',
        password: '',
      },
      errors: {},
    }
  },
  computed: {
    isLogin() {
      return this.$route.path === '/login'
    },
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = this.isLogin
          ? await signIn(this.login)
          : await signUp(this.register)

        localStorage.setItem('blog-token', data.jwt)
        localStorage.setItem('blog-user', JSON.stringify(data.user))
        window.alert(this.isLogin ? '登录成功!' : '注册成功!')
        // 跳转首页
        this.$router.push('/')
      } catch (error) {
        console.dir(error)
        this.errors = error.response.data.errors
      }
    },
  },
}
</script>

<style scoped></style>
