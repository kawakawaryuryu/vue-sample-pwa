<template>
  <div class="home">
    <h1>Qiita Search</h1>
    <QiitaSearch></QiitaSearch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import QiitaSearch from '@/components/QiitaSearch.vue' // @ is an alias to /src

@Component({
  components: {
    QiitaSearch
  }
})
export default class Home extends Vue {}
</script>
