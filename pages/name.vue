<template>
  <div>
  <Name/>
  hoge: {{hoge}}
  fuga: {{fuga}}
  </div>
</template>

<script>
import Name from '~/components/Name'
export default {
  data: function() {
    return {
      hoge: 'aaa',
      fuga: 'bbb'
    }
  },
  components: { Name },
  asyncData({ query }) {
    return {
      hoge: 'ワイワイ',
      fuga: query['fuga']
    }
  }
}
</script>
