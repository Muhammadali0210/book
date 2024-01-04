<template>
    <div class="book-item">
        <img :src="img" alt="img">
        <div class="name">{{ name }}</div>
        <div class="author">{{ author }}</div>
    </div>
</template>
<script>
export default {
    name: "BookItem",
    props:{
        img: String,
        name: String,
        author: String
    }
}
</script>
<style scoped>
.book-item{
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.book-item:hover{
    scale: 1.05;
    transition: 0.25s;
}
.book-item img{
    width: 100%;
    height: 282px;
    object-fit: contain;
    border-radius: 15px;
    overflow: hidden;
}
.name{
    color: var(--itemTitle);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.author{
    color: var(--itemLabel);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>