<template>
    <div class="security-wrap">
        <form action="#">
            <div class="profile-title">{{ $store.state.lang.changeOrRecover }}</div>
            <br>
            <div class="setting-content">
                <div class="theme-button cursor" @click="$store.commit('colorTheme')">
                    <img src="../../assets/icons/lite-theme.svg" alt="lite" v-if="!$store.state.colorTheme">
                    <img src="../../assets/icons/dark-theme.svg" alt="dark" v-if="$store.state.colorTheme">
                </div>
                <div class="language-contrent">
                    <li class="language-item cursor" @click="uzLanguage" :class="[{active: languz}]">UZ</li>
                    <li class="language-item cursor" @click="engLanguage" :class="[{active: langeng}]">ENG</li>
                </div>
            </div>
            <br/>
            <SaveButton />
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            languz: true,
            langeng: false,
        }
    },
    methods: {
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
}
</script>
<style scoped>
.security-wrap{
    width: 712px;
}
.setting-content{
    display: flex;
    gap: 30px;
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
</style>