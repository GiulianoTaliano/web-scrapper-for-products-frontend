<template>
    <form @submit.prevent="$emit('search')" class="search-form">
        <div class="custom-input">
        <label>Product Name</label>
            <input type="text" :value="productName" @input="updateProductName($event.target.value)"
                placeholder="Enter product name" required />
        </div>
        <div class="custom-input">
            <label>Country Code</label>
            <select :value="countryCode" @change="updateCountryCode($event.target.value)" required>
                <option value="" disabled>Select a country</option>
                <option v-for="country in countries" :key="country.code" :value="country.code">
                    {{ country.name }} ({{ country.code }})
                </option>
            </select>
        </div>
        <button type="submit" class="search-button">Search</button>
    </form>
</template>

<script>
import countryList from 'country-list';

export default {
    props: {
        productName: String,
        countryCode: String,
    },
    data() {
        return {
            countries: [],
        };
    },
    created() {
        this.countries = countryList.getData().map(country => ({
            name: country.name,
            code: country.code,
        }))
    },
    methods: {
        updateProductName(value) {
            this.$emit('update:productName', value);
        },
        updateCountryCode(value) {
            this.$emit('update:countryCode', value)
        },
        emitSearch() {
            this.$emit('search', {
                productName: this.productName,
                countryCode: this.countryCode,
            });
        },
    },
};
</script>

<style scoped>
.search-form {
    display: flex !important;
    flex-direction: column;
}

.custom-input {
    padding: 12px 0;
    width: 100%;
    display: flex !important;
    flex-direction: column;
    gap: 5px;
}

label {
    font-weight: bold;
    color: #333;
    margin-top: 5px;
}

input {
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    background-color: #F0F2F5;
}

select {
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    height: 50px;
    width: 100%;
    background-color: #F0F2F5;
}

select:hover {
    cursor: pointer;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 12px;
    height: 50px;
    cursor: pointer;
    width: 100%;
    margin: 12px 0px;
}

button:hover {
    background-color: #0056b3;
}
</style>