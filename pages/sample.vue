<template>
  <div>
    <p>hoge: {{hoge}}</p>
    <!-- <sample hogeFromPage='hello!' /> -->
    <sample v-bind="{'hogeFromPage': hoge}" />
    <p>store: {{this.$store.state.sample.hogeFromStore}}</p>
    <button v-on:click="$store.dispatch('sample/writeHoge', '値を書き換えます')">Test1</button>
    <button v-on:click="testMethod()">Test2</button>
  </div>
</template>

<script>
import sample from '~/components/Sample'

export default {
  data: function() {
    return {
      // asyncDataで上書きされる
      hoge: 'default'
    }
  },
  components: { sample },
  asyncData(context) {
    return {
      // asyncDataでreturnすると、dataにマージされる
      hoge: context.query['hoge']
    }
  },
  methods: {
    testMethod: function() {
      console.log(this.$store.state.sample.hogeFromStore)
      this.$store.dispatch('sample/writeHoge', 'メソッドからの書き換え')
      console.log(this.$store.state.sample.hogeFromStore)
    }
  }
}
</script>
