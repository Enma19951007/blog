<template>
  <Layout>

    <!-- Page Header-->
    <!-- style="background-image: url('/img/home-bg.jpg')" -->

    <header
      class="masthead"
      :style="{
        backgroundImage: `url(${API_URL}${$page.general.edges[0].node.cover.url})`
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{$page.general.edges[0].node.title}}</h1>
              <span class="subheading">{{$page.general.edges[0].node.subtitle}}</span>
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
          <div class="post-preview" v-for="edges in $page.posts.edges" :key="edges.node.id">
            <router-link :to="`/post/${edges.node.id}`">
              <h2 class="post-title">
                {{ edges.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                {{ edges.node.content }}
              </h3> -->
            </router-link>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on {{ edges.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edges.node.tags" :key="tag.id">
                <router-link :to="`/tag/${tag.id}`">
                  {{tag.title}} &nbsp;&nbsp;
                </router-link>
              </span>
            </p>
            <hr class="my-4" />
          </div>
          <!-- Divider-->
          
          <!-- Pager-->
          <!-- <div class="d-flex justify-content-end mb-4">
            <a class="btn btn-primary text-uppercase" href="#!"
              >Older Posts →</a
            >
          </div> -->
          <Pager :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost(perPage: 1, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
      	id
    		title
        created_at
        tags {
          id
          title
        }
      }
    }
  }
  general: allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  name: 'HomePage',
  components: {
    Pager
  }
};
</script>

<style>
</style>
