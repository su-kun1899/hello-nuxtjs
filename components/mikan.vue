<template>
  <p>{{ name }} は {{ priceWithTax }}円</p>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'みかん',
      price: 100
    }
  },
  computed: {
    priceWithTax: function() {
      return this.price * 1.08
    }
  }
}
</script>
