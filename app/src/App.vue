<template>
  <div id="app">
    <h1>Product Search</h1>
    <input v-model="productName" placeholder="Enter product name" />
    <input v-model="countryCode" placeholder="Enter country code" />
    <button @click="searchProducts">Search</button>

    <div v-if="loading">Loading...</div>
    
    <ul v-if="products.length > 0">
      <li v-for="(product, index) in products" :key="index">
        <strong>{{ product.name }}</strong> - Relevance Score: {{ product.relevance_score }}
      </li>
    </ul>

    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productName: '',
      countryCode: '',
      products: [],
      loading: false,
      error: null
    };
  },
  methods: {
    async searchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/products', {
          params: {
            product_name: this.productName,
            country_code: this.countryCode
          }
        });
        this.products = response.data;
      } catch (err) {
        this.error = 'Failed to fetch products';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

input {
  margin: 5px;
}
</style>
