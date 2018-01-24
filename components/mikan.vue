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
  },
  methods: {
    calcAmount: function(count) {
      return this.price * count
    },

    calcAmountWithTax: function(count) {
      return this.calcAmount(count) * 1.08
    }
  }
}
</script>
