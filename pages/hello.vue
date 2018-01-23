<template>
  <div id="demo">
    <p>{{message}}</p>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'hello world!'
    }
  }
}
</script>
