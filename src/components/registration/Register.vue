<template>
    <div class="registration-wrap">
        <div class="image-content">
            <div class="img">
                <img src="../../assets/images/register-bg.svg" alt="img">
            </div>
        </div>
        <div class="form-content">
            <form action="#" class="register-form">
                <div class="register-title">{{ $store.state.lang.signUp }}</div>
                <div class="register-label">{{ $store.state.lang.alreadyAccount }}<span class="register-link cursor"><RouterLink to="/login" style="color: #459FFF;">{{ $store.state.lang.signIn }}</RouterLink></span></div>
                <div class="form-inputs">
                    <RegistrationInput type="text" name="firstName" placeholder="First Name" />
                    <RegistrationInput type="text" name="lastName" placeholder="Last Name" />
                    <RegistrationInput type="text" name="phone" placeholder="Phone" />
                    <RegistrationInput type="text" name="email" placeholder="Email" />
                    <RegistrationInput type="password" name="password" placeholder="Password" />
                </div>
                <RegistrationButton>{{ $store.state.lang.nextStep }}</RegistrationButton>
            </form>
        </div>
    </div>
</template>
<script>
import {RouterLink} from 'vue-router'
export default {
}
</script>
<style scoped>
.registration-wrap{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.image-content{
    height: 100%;
    background-color: #CFAC85;
    display: flex;
    align-items: center;
    justify-content: center;
}
.image-content .img{
    width: 500px;
    height: 500px;
}
.image-content .img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.form-content{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--homeBg);
}
.register-form{
    width: 330px;
}
.register-label{
    color: var(--whiteBlack);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
}
.register-link{
    color: #549FF9;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.form-inputs{
    margin-top: 21px;
    margin-bottom: 34px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>