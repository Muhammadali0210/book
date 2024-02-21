<template>
    <div class="container">
        <div class="navbar">
            <div class="logo">{{$store.state.lang.mainPage}}</div>
            <div class="controller">
                <ul class="page-box">
                    <li class="cursor" @click="authContent">{{$store.state.lang.mainPage}}</li>
                    <li class="cursor" @click="bookContent">{{$store.state.lang.book}}</li>
                </ul>
                <div class="language-contrent">
                    <li class="language-item cursor" @click="uzLanguage" :class="[{active: languz}]">UZ</li>
                    <li class="language-item cursor" @click="engLanguage" :class="[{active: langeng}]">ENG</li>
                </div>
                <div class="theme-button cursor" @click="$store.commit('colorTheme')">
                    <img src="../../assets/icons/lite-theme.svg" alt="lite" v-if="!$store.state.colorTheme">
                    <img src="../../assets/icons/dark-theme.svg" alt="dark" v-if="$store.state.colorTheme">
                </div>
                
                <div class="profile-content">
                    <div class="profile-img">
                        <img src="../../assets/images/my-foto.jpg" alt="img">
                    </div>
                    <div class="profile-select cursor">
                        <div class="select-img" @click="select = !select"></div>
                        <ul v-if="select">
                            <RouterLink to="/profile">
                                <li @click="select = !select">
                                    Profile
                                </li>
                            </RouterLink>
                            <RouterLink to="/author">
                                <li @click="select = !select">
                                    Add author
                                </li>
                            </RouterLink>
                            <RouterLink to="/book">
                                <li @click="select = !select">
                                    Add book
                                </li>
                            </RouterLink>
                            <RouterLink to="/register">
                                <li @click="select = !select">
                                    Log out
                                </li>
                            </RouterLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {RouterLink} from 'vue-router'
export default {
    methods: {
        authContent(){
            this.$store.commit('authContent')
        },
        bookContent(){
            this.$store.commit('bookContent')
        },
        activeLanguage(){
            this.$store.commit('languageTheme')
        },
        uzLanguage(){
            this.$store.commit('uzLanguage')
            this.languz = true
            this.langeng = false
        },
        engLanguage(){
            this.$store.commit('engLanguage')
            this.languz = false
            this.langeng = true
        }
        
    },
    data() {
        return {
            select: false,
            languz: true,
            langeng: false,
        }
    }
}
</script>
<style scoped>
.navbar{
    display: flex;
    padding: 32px 0;
    justify-content: space-between;
}
.language-contrent{
    display: flex;
    box-shadow: 0 0 10px #5c5c5c5c;
    border-radius: 5px;
}
.language-item{
    padding: 5px;
    width: 60px;
    text-align: center;
    color: var(--whiteBlack);
}
.language-item.active{
    color: #c9ac8c;
}
.language-item:nth-child(1){
    border-right: 1px solid #6060607a;

}
.theme-button{
    padding: 5px;
    box-shadow: 0 0 10px #5c5c5c5c;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
}
.theme-button:hover{
    background-color: #ffffff22;
}
.logo{
    color: #D1B89D;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.page-box{
    display: flex;
    padding: 10px;
    color: #0D0D0D;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 144.4%;
    gap: 22px;
}
.controller{
    display: flex;
    align-items: center;
    gap: 48px;
}
.profile-content{
    display: flex;
    align-items: center;
    gap: 12px;
}
.profile-img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    overflow: hidden;
}
.profile-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.profile-select{
    display: flex;
    gap: 11px;
    position: relative;
}
.profile-select ul{
    /* display: none; */
    top: 50px;
    width: 140px;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    background-color: var(--grey);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    z-index: 11;

}
.profile-select ul li{
    padding: 8px 24px;
}
.profile-select ul li:hover{
    background-color: #c7c7c7;
}
.select-img{
    background-image: url('../../assets/icons/bottom.svg');
    width: 30px;
    height: 30px;
    background-size: 20px 20px;
    /* border: 1px solid red; */
    border-radius: 50%;
    padding: 5px;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 5px #707070;
    background-color: #fff;
    /* display: flex; */
    /* justify-content: start; */
}
</style>