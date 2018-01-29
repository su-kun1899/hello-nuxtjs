<template>
  <div>
    <p>hoge from page: {{hogeFromPage}}</p>
    <p>example: {{example}}</p>
  </div>
</template>

<script>
export default {
  props: ['hogeFromPage'],
  data: function() {
    return { example: '' }
  },
  mounted: function() {
    this.$store.dispatch('sample/writeHoge', 'できるかな')
    console.log('from sub component ' + this.$store.state.sample.hogeFromStore)
    this.example = this.$store.state.sample.hogeFromStore
  }
}
</script>
