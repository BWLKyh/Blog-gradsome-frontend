<template>
  <Layout>
    <!-- Page Header-->
    <!-- <header class="masthead" style="background-image: url('/img/post-bg.jpg')"> -->
    <header
      class="masthead"
      :style="{
        backgroundImage: $page.post.cover
          ? `${$page.post.cover.url}`
          : '/img/post-bg.jpg',
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ $page.post.title }}</h1>
              <!-- <h2 class="subheading">
                Problems look mighty small from 150 miles up
              </h2> -->
              <p class="post-meta">
                {{ $page.post.createdby ? 'Posted by' : 'anonymous' }}
                <a href="#!">{{
                  $page.post.createdby ? $page.post.createdby : ''
                }}</a>
                on {{ $page.post.created_at | date('MMM DD, YYYY') }}
              </p>
              <p>
                <span v-for="tag in $page.post.tags" :key="tag.id"
                  ><a href="">{{ tag.title }}</a> &nbsp;&nbsp;</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div
            class="col-md-10 col-lg-8 col-xl-7"
            v-html="mdToHtml($page.post.content)"
          ></div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  post: strapiPost (id: $id){
    id
    title
    content
    cover{
      url
    }
    createdby
    tags{
      id
      title
    }
    created_at
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'PostPage',
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown)
    },
  },
}
</script>

<style scoped>
.post-meta > a {
  color: aqua;
}
</style>
