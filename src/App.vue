<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import vHeader from 'components/v-header/v-header'
import { getSeller, postName } from 'api'
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    vHeader
  },
  created () {
    getSeller({ page: 1, rows: 10 }).then((seller) => {
      this.seller = seller
    })
    postName({ postId: 1112345 }).then((name) => {

    })
  }
}
</script>
<style lang="stylus"></style>
