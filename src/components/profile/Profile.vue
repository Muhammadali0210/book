<template>
    <form action="#">
        <div class="security-wrap">
            <div class="image-box">
                <img src="../../assets/images/my-foto.jpg" alt="img">
            </div>
            <div class="form-box">
                <div class="profile-title">{{ $store.state.lang.changeOrRecover }}</div>
                <br/>
                <ProfileInput name="email" type="text" placeholder="data" />
                <ProfileInput name="password" type="password" placeholder="data" />
                <ProfileInput name="newpassword" type="password" placeholder="data"/>
                <br/>
                <SaveButton />
            </div>
        </div>
    </form>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.security-wrap{
    width: 712px;
    display: flex;
    justify-content: space-between;
}
.image-box{
    width: 174px;
    height: 174px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset 0 0 10px #6464643c;
}
.form-box{
    width: 490px;
}
.image-box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>