<template>
    <div class="profile-wrapper">
        <ul class="controller-bar">
            <li class="control-button cursor" v-for="activeBar in activeBar"  @click="myactivePage(activeBar.id)"  :class="[{active: activeBar.id==activePage}]">
                <div class="number">{{ activeBar.id }}</div>
                <div class="name">{{ activeBar.name }}</div>
            </li>
            
        </ul>
        <div class="profile-view-wrap">
            <div class="back-link">
                <RouterLink to="/">Qaytish</RouterLink>
            </div>
            <Profile v-if="activePage == 1" />
            <Security v-if="activePage == 2" />
            <Setting v-if="activePage == 3" />
        </div>
    </div>
</template>
<script>
import Profile from './Profile.vue';
import Security from './Security.vue';
import Setting from './Setting.vue';

export default {
    components: { Profile, Security, Setting },
    data() {
        return {
            activePage: 1,
            activeBar: [
                {
                    id:1,
                    name: this.$store.state.lang.profile
                },
                {
                    id:2,
                    name: this.$store.state.lang.security
                },
                {
                    id:3,
                    name: this.$store.state.lang.setting
                },
            ]
        }
    },
    methods: {
        myactivePage(id){
            this.activePage = id
        }
    },
}
</script>
<style scoped>
.profile-wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

}
.controller-bar{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 80px;
}
.control-button{
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: var(--passivBar);
    padding-left: 23px;
    gap: 8px;
}
.control-button.active{
    background-color: var(--activBar);
}
.control-button .number{
    width: 35px;
    height: 35px;
    background-color: var(--passivbarNumberBlock);
    border: 1px solid #EEF2F2;
    color: var(--passivNumber);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.control-button.active .number{
    background-color: var(--activebarNumberBlock);
    color: var(--activeNumber);
    border: 1px solid transparent;
}

.control-button .name{
    color: var(--barText);
}
.control-button.active .name{
    color: var(--activebarNumberBlock);
}

.profile-view-wrap{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--homeBg);
}
.back-link{
    position: absolute;
    top: 50px;
    left: 50px;
}
</style>