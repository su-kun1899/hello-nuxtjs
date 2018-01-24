<template>
  <div>
    <li v-for="fruit in fruits" :key="fruit.name">
      {{fruit.name}}は{{fruit.price}}円
    </li>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fruits: [
        { name: 'みかん', price: 100 },
        { name: 'もも', price: 300 },
        { name: 'いちじく', price: 500 },
        { name: 'メロン', price: 1000 }
      ]
    }
  }
}
</script>
