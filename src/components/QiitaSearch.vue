<template>
  <div>
    <input type="text" v-model="tag"/>
    <button @click="search(tag)">search</button>
    <ul>
      <li v-for="article of articles" v-bind:key="article.id">
        {{ article.url }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { QiitaArticle } from '@/interface/QiitaArticle'
import axios, { AxiosResponse } from 'axios'

@Component
export default class QiitaSearch extends Vue {
  private articles: QiitaArticle[] = [];
  private tag: string = '';

  public async created () {
    this.articles = []
  }

  public async search (tag: string) {
    try {
      const response: AxiosResponse = await axios.get<QiitaArticle[]>(`https://qiita.com/api/v2/tags/${tag}/items`)
      this.articles = response.data
    } catch (e) {
      console.log(e)
      this.articles = []
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
