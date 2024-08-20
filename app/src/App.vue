<template>
    <AppHeader />
    <div id="main">
        <div class="details-block">
            <h2>About Gadget Search</h2>
            <p>
                Welcome to our product search application! Our goal is to help
                you find web pages that sell the product you're looking for,
                along with honest and positive user reviews, comments, or
                validations. We use advanced AI to sift through relevant web
                pages, ensuring that the products you see have been positively
                reviewed by other buyers.
            </p>
            <p>
                Each product is rated on a scale of 1 to 5 based on the
                positivity of the reviews or the sheer number of positive
                comments it has received. Keep in mind that the search process
                may take up to 5 minutes. That's because we use a powerful AI
                model that carefully analyzes each web page to find the best and
                most reliable feedback for you.
            </p>
            <p>
                We appreciate your patience and hope this application helps you
                make informed buying decisions!
            </p>
        </div>
        <SearchForm
            :productName="productName"
            :countryCode="countryCode"
            @update:productName="productName = $event"
            @update:countryCode="countryCode = $event"
            @search="searchProducts"
        />
        <LoadingState :progress="progress" v-if="isLoading" />
        <ProductListing
            :productName="productName"
            :countryCode="countryCode"
            :products="products"
            v-if="!isLoading && products.length > 0"
        />
    </div>
    <AppFooter />
</template>

<script src="./App.js"></script>

<style>
    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #app {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: 0;
    }

    #main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 30vh;
    }

    .details-block {
        border-radius: 8px;
        padding: 20px 0;
        margin-bottom: 20px;
        width: 100%;
        text-align: center;
    }

    .details-block h2 {
        margin-top: 0;
        font-size: 20px;
        font-weight: bold;
    }

    .details-block p {
        margin: 10px 0;
        font-size: 16px;
        color: #555;
        line-height: 1.5;
    }
</style>
