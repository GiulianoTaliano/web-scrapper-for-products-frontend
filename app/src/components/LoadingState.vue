<template>
    <div class="loading-state">
        <p>Searching products</p>
        <div class="progress-bar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style scoped>
.loading-state {
    text-align: center;
    margin: 20px 0;
}

p {
    text-align: left;
}

.progress-bar {
    background-color: #e0e0e0;
    height: 8px;
    width: 100%;
    border-radius: 4px;
    margin: 10px auto;
}

.progress {
    background-color: #007bff;
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease;
}
</style>