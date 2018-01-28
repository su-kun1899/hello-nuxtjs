<template>
  <div v-bind:class="{'error':!isValid}" v-bind:style="{'border': (isValid ? '' : '1px solid red')}">
    <p id="name">名前: {{name}}</p>
    <input v-model="name">
    <p>
      <!-- onInputでnameの値を書き換える -->
      <input type="text" v-on:input="name = $event.target.value">
    </p>
    <p>
      <!-- onChangeでnameの値を書き換える -->
      <input type="text" v-on:change="name = $event.target.value">
    </p>
    <p>
      <!-- onChangeでメソッドを呼び出す -->
      <input type="text" v-on:change="showName($event)">
    </p>
    <p id="message" v-show="!isValid">
      名前を入力して下さい。
    </p>
    <p>
      パラメータ: {{params}}
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: '',
      params: 'default'
    }
  },
  computed: {
    isValid: function() {
      return this.name.length > 0
    }
  },
  methods: {
    showName: function(event) {
      alert(event.target.value)
    }
  }
}
</script>
