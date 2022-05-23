<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('/img/notes-bg.jpeg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>My Notes</h1>
              <span class="subheading"
                >基于 Gridsome 读取 markdown 文件的笔记</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            class="post-preview"
            v-for="edge in $page.notes.edges"
            :key="edge.node.id"
          >
            <g-link :to="'/note/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">阅读时长: {{ edge.node.timeToRead }} min</p>
            <!-- Divider-->
            <hr class="my-4" />
          </div>

          <pager :info="$page.notes.pageInfo" linkClass="pager" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page:Int) {
  notes: allBlogPost (perPage:2, page:$page) @paginate {
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        content
        timeToRead
      }
    }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  name: 'NotePage',
  metaInfo: {
    title: '学习笔记',
  },
  components: {
    Pager,
  },
}
</script>

<style scoped>
.pager {
  color: greenyellow;
  margin: 10px;
}
</style>
