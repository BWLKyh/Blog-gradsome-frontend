<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('/img/contact-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>Contact Me</h1>
              <span class="subheading">Have questions? I have answers.</span>
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
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div class="my-5">
              <!-- * * * * * * * * * * * * * * *-->
              <!-- * * SB Forms Contact Form * *-->
              <!-- * * * * * * * * * * * * * * *-->
              <!-- This form is pre-integrated with SB Forms.-->
              <!-- To make this form functional, sign up at-->
              <!-- https://startbootstrap.com/solution/contact-forms-->
              <!-- to get an API token!-->
              <!-- <form id="contactForm" data-sb-form-api-token="API_TOKEN"> -->
              <form @submit.prevent="onSubmit">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    v-model="form.name"
                  />
                  <label for="name">Name</label>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    v-model="form.email"
                  />
                  <label for="email">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Enter your phone number..."
                    v-model="form.phone"
                  />
                  <label for="phone">Phone Number</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style="height: 12rem"
                    v-model="form.message"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
                <br />
                <!-- Submit success message-->
                <!---->
                <!-- This is what your users will see when the form-->
                <!-- has successfully submitted-->
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms"
                      >https://startbootstrap.com/solution/contact-forms</a
                    >
                  </div>
                </div>
                <!-- Submit error message-->
                <!---->
                <!-- This is what your users will see when there is-->
                <!-- an error submitting the form-->
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                <!-- Submit Button-->
                <button
                  class="btn btn-primary text-uppercasez"
                  id="submitButton"
                >
                  Send
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
          url: '/contacts',
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
