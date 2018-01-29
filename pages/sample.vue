<template>
  <div>
    <p>hoge: {{hoge}}</p>
    <!-- <sample hogeFromPage='hello!' /> -->
    <sample v-bind="{'hogeFromPage': hoge}" />
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
  }
}
</script>
