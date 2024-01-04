<template>
    <div class="author-item cursor">
        <div class="img">
            <img :src="img" alt="img">
        </div>
        <div class="text-content">
            <div class="name">{{name}}</div>
            <div class="years">{{ years  }}</div>
            <div class="naqsh1"></div>
            <div class="naqsh2"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AuthorItem",
    props: {
        name: String,
        img: String,
        years: String
    }
}
</script>
<style>
.author-item{
    border-radius: 22px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 77px 0px rgba(0, 0, 0, 0.25);
    transition: 0.25s;
}
.author-item:hover{
    scale: 1.05;
}
.img{
    height: 224px;
    width: 100%;
}
.img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.text-content{
    height: 140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: var(--grey);
    padding: 12px 16px;
    position: relative;
    overflow: hidden;
}
.naqsh1,
.naqsh2{
    position: absolute;
    width: 142px;
    height: 142px;
    background-image: url(../assets/images/naqsh.svg);
    background-size: contain;
    background-repeat: no-repeat;
}
.naqsh1{
    right: -62px;
    top: -50px;
}
.naqsh2{
    left: -50px;
    bottom: -50px;
}
.name{
    color: var(--itemTitle);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.years{
    color: var(--itemLabel);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>