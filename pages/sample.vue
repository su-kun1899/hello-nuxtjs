<template>
  <div>
    <p>hoge: {{hoge}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // asyncDataで上書きされる
      hoge: 'default'
    }
  },
  asyncData(context) {
    return {
      // asyncDataでreturnすると、dataにマージされる
      hoge: context.query['hoge']
    }
  }
}
</script>
