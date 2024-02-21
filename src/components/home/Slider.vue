<template>
    <div class="container">
        <div class="slider-content">
            <div class="swiper" >
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        slide1
                    </div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</template>
<script>
// import {Swiper} from 'swiper'
export default {
    methods:{
        mySlider(){
            const swiper = new Swiper('.swiper', {
                // direction: 'horizontal',
                effect: "fade",
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
            });
        }
    },
    mounted() {
        this.mySlider()
    },
}
</script>
<style scoped>
.slider-content{
    width: 100%;
    height: 346px;
    border-radius: 21px;
    overflow: hidden;
    background-color: rgba(90, 164, 255, 0.616);
    z-index: 10;
}
.swiper{
    height: 100%;
    position: relative;
}
.swiper-pagination{
    position: absolute;
    top: 100px;
    left: 400px;
    border-radius: 0;
    width: 10px;
    height: 280px;
    rotate: -90deg;
    gap: 10px;
}

.swiper-wrapper:global(.swiper-pagination-bullet) {
    background: #9AA4A5;
    width: 3px;
    height: 58px;
    opacity: 1;
    border-radius: 10px;
    margin: 70px;
    display: block;
}
  
.swiper-wrapper:global(.swiper-pagination-bullet-active) {
    background-color: #fff;
    width: 3px;
    height: 58px;
    border-radius: 10px;
}
.swiper-button-prev,
.swiper-button-next{
    font-size: 10px;    
    width: 40px;
    height: 40px;
    background-color: rgba(123, 123, 123, 0.241);
    border-radius: 50%;
    box-shadow: inset 0 0 5px #0000004d;
}
.swiper-button-prev::after,
.swiper-button-next::after{
    font-size: 20px;
    color: #ffffff;
}

</style>