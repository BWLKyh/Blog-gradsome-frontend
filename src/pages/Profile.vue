<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('/img/post-sample-image.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>My Profile</h1>
              <span class="subheading">Login or Sign up</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <h3>敬请期待</h3>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await axios({
          method: 'POST',
          url: GRIDSOME_API_URL + '/contacts',
          data: this.form,
        })
        console.log('提交成功', data)
        window.alert('提交成功!')
      } catch (error) {
        console.log('出错了', error)
        window.alert('发送失败,请稍后重试!')
      }
    },
  },
}
</script>

<style scoped></style>
