<template>
    <div class="heart-rating">
        <span v-for="index in 5" :key="index" class="heart">
            <i
                :class="index <= positiveness ? 'filled-heart' : 'empty-heart'"
            ></i>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            positiveness: {
                type: Number,
                required: true,
            },
        },
    };
</script>

<style scoped>
    .heart-rating {
        display: flex;
        align-items: center;
    }

    .heart {
        font-size: 20px;
        color: black;
        margin-right: 5px;
    }
    .filled-heart::before {
        content: '♥';
        /* Filled heart */
    }

    .empty-heart::before {
        content: '♥';
        color: #ccc;
        /* Empty heart */
    }
</style>
