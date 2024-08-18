<template>
  <AppHeader />
  <div id="main">
    <SearchForm :productName="productName" :countryCode="countryCode" @update:productName="productName = $event" 
      @update:countryCode="countryCode = $event" @search="searchProducts" />
    <LoadingState :progress="progress" 
      v-if="isLoading" />
    <ProductListing :productName="productName" :countryCode="countryCode" :products="products" 
      v-if="!isLoading && products.length > 0" />
  </div>
  <AppFooter />
</template>

<script src="./App.js"></script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 9vh;
  font-family: Arial, sans-serif;
  margin: 0;
}

#main {
  padding: 0 200px;
}
</style>
