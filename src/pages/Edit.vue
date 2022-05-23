<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>Sample Post</h1>
              <span class="subheading">Write something down...</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <g-link to="/login" v-show="!logged" class="go-to"
      >请先 <b>登录/注册</b> 后写文章, 点击前往</g-link
    >
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="my-5">
              <form @submit.prevent="onSubmit">
                <fieldset :disabled="!logged">
                  <div class="form-floating">
                    <input
                      class="form-control"
                      id="title"
                      type="text"
                      placeholder="Enter your title..."
                      required
                      v-model="form.title"
                    />
                    <label for="title"
                      >Title
                      <span class="placeholder-text"
                        >Enter your title...</span
                      ></label
                    >
                  </div>
                  <div class="form-floating">
                    <input
                      class="form-control"
                      id="tags"
                      type="text"
                      v-model="tag"
                      placeholder="Enter your Tags..."
                      @keyup.enter="onAddTag(tag)"
                      onkeypress="return event.keyCode != 13"
                    />
                    <label for="tags"
                      >Tags<span class="placeholder-text"
                        >Enter your Tags...</span
                      ></label
                    >
                  </div>
                  <div class="tag-list">
                    <button
                      type="button"
                      class="tag"
                      v-for="tag in form.tags"
                      :key="tag"
                    >
                      <i class="ion-close-round" @click="onDeleteTag(tag)">
                        ×
                      </i>
                      {{ tag }}
                    </button>
                  </div>
                  <div class="form-floating">
                    <input
                      class="form-control"
                      id="cover"
                      type="url"
                      placeholder="Enter your Cover image link..."
                      v-model="form.cover.url"
                    />
                    <label for="cover"
                      >Cover<span class="placeholder-text"
                        >Enter your Cover image link...</span
                      ></label
                    >
                  </div>
                  <img :src="form.cover" />
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      id="content"
                      style="height: 12rem"
                      placeholder="Enter your content here, you can also write it using
                      Markdown ..."
                      required
                      v-model="form.content"
                    ></textarea>
                    <label for="content"
                      >Content<span class="placeholder-text"
                        >Enter your content here, you can also write it using
                        Markdown ...</span
                      ></label
                    >
                  </div>

                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDisabled"
                      v-model="form.is_publish"
                    />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Publish after sumbit success
                    </label>
                  </div>
                  <br />
                  <!-- Submit Button-->
                  <button
                    class="btn btn-primary text-uppercasez"
                    id="submitButton"
                  >
                    Send
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>

</page-query>

<script>
import { addPost } from '/api/post'
const user =
  (window && JSON.parse(window.localStorage.getItem('blog-user'))) || {}

export default {
  name: 'ContactPage',
  // beforeRouteEnter(to, from, next) {
  //   if (!localStorage.getItem('blog-token')) {
  //     next('/login')
  //   }
  // },
  data() {
    return {
      form: {
        title: '',
        is_publish: true,
        tags: [],
        cover: {},
        content: '',
        createdby: user.username,
        updatedby: user.username,
      },
      tag: '',
    }
  },
  computed: {
    logged() {
      return window && window.localStorage.getItem('blog-token')
    },
  },
  methods: {
    onAddTag(tag) {
      if (!!tag) {
        this.form.tags.push(tag)
        this.tag = ''
      }
    },
    onDeleteTag(tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1)
    },
    async onSubmit() {
      try {
        const { data } = await addPost(this.form)
        console.log('提交成功', data)
        window.alert('提交成功!')
      } catch (error) {
        console.dir(error)
        window.alert('发送失败,请稍后重试!')
      }
    },
  },
}
</script>

<style scoped>
.placeholder-text {
  font-size: 14px;
  font-style: italic;
  color: gainsboro;
  margin-left: 20px;
}
.tag {
  margin: 10px 10px 10px 0;
  padding: 0 10px;
  background: transparent;
  border-radius: 20px;
  border: 1px solid #ffc107;
  color: #ffc107;
}
.go-to {
  display: block;
  margin: 0 auto;
  text-align: center;
}
</style>
