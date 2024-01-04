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
            langtheme: this.$store.state.langTheme
        }
    },
}
</script>
<style scoped>
.security-wrap{
    width: 712px;
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
</style>