<template>
    <div class="product-listing">
        <div class="title_sorting">
            <h1>Results for "{{ productName }}" in {{ countryName }}</h1>
            <div class="sorting-options">
                <span
                    class="sort-icon"
                    @click="toggleSortOrder"
                    v-if="sortBy === 'price' || sortBy === 'positiveness'"
                >
                    <i
                        :class="sortOrder === 'asc' ? 'icon-down' : 'icon-up'"
                    ></i>
                </span>
                <select v-model="sortBy" @change="sortProducts">
                    <option value="relevance">Relevance</option>
                    <option value="price">Price</option>
                    <option value="positiveness">Positiveness</option>
                </select>
            </div>
        </div>
        <div
            class="product"
            v-for="product in sortedProducts"
            :key="product.name"
        >
            <img :src="product.image" />
            <div class="product-details">
                <h2>{{ product.name }}</h2>
                <p class="price">{{ product.price }}</p>
            </div>
            <HeartRating :positiveness="product.positiveness" />
        </div>
    </div>
</template>

<script>
    import HeartRating from './HeartRating.vue';
    import { getName } from 'country-list';

    export default {
        components: {
            HeartRating,
        },
        props: {
            products: {
                type: Array,
                required: true,
            },
            productName: String,
            countryCode: String,
        },
        data() {
            return {
                sortBy: 'relevance',
                sortOrder: 'asc',
            };
        },
        computed: {
            countryName() {
                return getName(this.countryCode) || this.countryCode;
            },
            sortedProducts() {
                // Handle the original order as the default for 'relevance'
                if (this.sortBy === 'relevance') {
                    return this.products;
                }

                return this.products.slice().sort((a, b) => {
                    let comparison = 0;

                    if (this.sortBy === 'price') {
                        comparison =
                            parseFloat(a.price.replace(/[^0-9.-]+/g, '')) -
                            parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
                    } else if (this.sortBy === 'positiveness') {
                        comparison = a.positiveness - b.positiveness;
                    }

                    return this.sortOrder === 'asc' ? -comparison : comparison;
                });
            },
        },
        methods: {
            toggleSortOrder() {
                this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            },
        },
    };
</script>

<style scoped>
    .product-listing {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        gap: 20px;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        padding: 10px 0;
    }

    .title_sorting {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .sorting-options {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .sorting-options select {
        padding: 5px;
        border: none;
        border-radius: 4px;
        background-color: #f0f2f5;
    }

    .sorting-options select:hover {
        cursor: pointer;
    }

    .sort-icon {
        cursor: pointer;
    }

    .icon-up::before {
        content: '▲';
    }

    .icon-down::before {
        content: '▼';
    }

    .product {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 75%;
        padding: 10px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
    }

    .product img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        object-fit: cover;
        border-radius: 8px;
    }

    .product-details {
        text-align: left;
        flex-grow: 1;
    }

    .product-details h2 {
        font-size: 16px;
        margin: 0;
        font-weight: bold;
    }

    .product-details p {
        margin: 5px 0 0;
        color: #555;
    }

    .price {
        color: lightgreen !important;
        font-weight: bold;
    }
</style>
