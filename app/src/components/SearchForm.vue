<template>
    <form @submit.prevent="$emit('search')" class="search-form">
        <div class="custom-input">
            <label for="product-name">Product</label>
            <input
                id="product-name"
                type="text"
                :value="productName"
                @input="updateProductName($event.target.value)"
                placeholder="Enter product name"
                v-tooltip="
                    'Enter the product you want to search for. The application will search for buyable products with positive reviews.'
                "
                required
            />
        </div>
        <div class="custom-input">
            <label for="country-code">Country</label>
            <select
                id="country-code"
                :value="countryCode"
                @change="updateCountryCode($event.target.value)"
                tooltip="'Select the country where the product search will be performed. The results will be based on websites relevant to this country.'"
                required
            >
                <option value="" disabled>Select a country</option>
                <option
                    v-for="country in countries"
                    :key="country.code"
                    :value="country.code"
                >
                    {{ country.name }} ({{ country.code }})
                </option>
            </select>
        </div>
        <button type="submit" class="search-button">Search</button>
    </form>
</template>

<script>
    import countryList from 'country-list';
    import { VTooltip } from 'v-tooltip';

    export default {
        props: {
            productName: {
                type: String,
                required: true,
            },
            countryCode: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                countries: [],
            };
        },
        directives: {
            tooltip: VTooltip,
        },
        created() {
            this.countries = countryList.getData().map((country) => ({
                name: country.name,
                code: country.code,
            }));
        },
        methods: {
            updateProductName(value) {
                this.$emit('update:productName', value);
            },
            updateCountryCode(value) {
                this.$emit('update:countryCode', value);
            },
        },
    };
</script>

<style scoped>
    .search-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .custom-input {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    label {
        font-weight: bold;
        color: #333;
    }

    input,
    select {
        padding: 16px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        background-color: #f0f2f5;
        transition: border-color 0.3s;
    }

    input:focus,
    select:focus {
        border-color: #007bff;
        outline: none;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        font-size: 16px;
        border-radius: 8px;
        height: 50px;
        cursor: pointer;
        width: 100%;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
