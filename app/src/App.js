// import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SearchForm from './components/SearchForm.vue';
import LoadingState from './components/LoadingState.vue';
import ProductListing from './components/ProductListing.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        SearchForm,
        LoadingState,
        ProductListing,
    },
    data() {
        return {
            productName: '',
            countryCode: '',
            products: [],
            isLoading: false,
            progress: 0,
        };
    },
    methods: {
        async searchProducts() {
            this.isLoading = true;
            this.progress = 0;

            // try {
            //     const response = await axios.get('http://127.0.0.1:8000/api/v1/products', {
            //         params: {
            //             product_name: this.productName,
            //             country_code: this.countryCode
            //         }
            //     });
            //     this.products = response.data.products;
            // } catch (err) {
            //     this.error = 'Failed to fetch products';
            // } finally {
            //     this.isLoading = false;
            // }

            // Simulating the progress
            const incrementProgress = () => {
                if (this.progress < 90) {
                    this.progress += 10;
                }
            };
            const progressInterval = setInterval(incrementProgress, 200); // Progress every 200ms

            // Mock search process, replace this with your actual API call
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a network delay

            // Complete the loading
            clearInterval(progressInterval);
            this.progress = 100;

            // Mocked products for demonstration
            this.products = [
                { name: "iPhone 13 Pro Max", price: "$1,000", "positiveness": "1", image: "https://via.placeholder.com/50" },
                { name: "Apple Watch Series 7", price: "$500", "positiveness": "5", image: "https://via.placeholder.com/50" },
                { name: "AirPods Pro", price: "$200", "positiveness": "3", image: "https://via.placeholder.com/50" },
                { name: "Air Fryer", price: "$450", "positiveness": "3", image: "https://via.placeholder.com/50" },
                { name: "Jordan IV", price: "$700", "positiveness": "4", image: "https://via.placeholder.com/50" },
                { name: "Audi A1", price: "$18000", "positiveness": "2", image: "https://via.placeholder.com/50" }
            ];

            // Reset loading and progress
            this.isLoading = false;
            this.progress = 0;
        },
    },
};
