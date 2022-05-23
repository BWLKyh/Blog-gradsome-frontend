<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('/img/note-bg.jpeg')"
    ></header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div
            class="col-md-10 col-lg-8 col-xl-7"
            v-html="$page.note.content"
          ></div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  note: blogPost (id: $id){
    id
    title
    content
  }
}
</page-query>

<script>
export default {
  name: 'PostPage',
  metaInfo() {
    return {
      title: this.$page.note.title,
    }
  },
}
</script>

<style scoped></style>
