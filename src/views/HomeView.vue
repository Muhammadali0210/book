<template>
  <div class="home-page">
    <div class="effect-bg"></div>
    <Navbar />
    <Slider />
    <Search />
    <MainCategory />
  </div>
  
</template>

<script >
import Navbar from "../../src/components/home/Navbar.vue"
import Slider from "../components/home/Slider.vue";
import Search from "../components/home/Search.vue";
import MainCategory from "../components/home/MainCategory.vue";
export default{
  components:{
    Navbar,
    Slider,
    Search,
    MainCategory
}
}

</script>

<style scoped>
.home-page{
  width: 100%;
  min-height: 100vh;
  background-color: var(--homeBg);
  position: relative;
  overflow: hidden;
}
.effect-bg{
  position: absolute;
  background-image: url(../assets/images/home-page-bg.png);
  width: 1178px;
  height: 1178px;
  background-size: contain;
  top: 200px;
  right: -300px;
}
</style>