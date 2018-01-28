<template>
  <div>
  <Name v-bind="{'query':fuga}" />
  hoge: {{hoge}}
  fuga: {{fuga}}
  </div>
</template>

<script>
import Name from '~/components/Name'

console.log(Name.data())

export default {
  data: function() {
    return {
      hoge: 'aaa',
      fuga: 'bbb',
      piyo: ''
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
