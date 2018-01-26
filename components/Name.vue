<template>
  <div>
    <p id="name">名前: {{name}}</p>
    <input v-model="name">
    <p id="message" v-show="!isValid">
      名前を入力して下さい。
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ''
    }
  },
  computed: {
    isValid: function() {
      return this.name.length > 0
    }
  }
}
</script>
