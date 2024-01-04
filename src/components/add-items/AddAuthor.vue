<template>
    <form action="#" class="registration-wrap">
        <div class="image-content">
            <div class="file-item">
                <input type="file" class="file-input" name="bookImg">
                <img src="../../assets/icons/plus.svg" alt="+">
                <div class="label">Click or drag file to this area to upload</div>
            </div>
        </div>
        <div class="form-content">
            <div class="register-form">
                <div class="register-title">Add author</div>
                <div class="form-inputs">
                    <RegistrationInput type="text" name="title" placeholder="First name" />
                    <RegistrationInput type="text" name="pages" placeholder="Last Name" />
                    <RegistrationInput type="text" name="year" placeholder="Date of birth" />
                    <RegistrationInput type="text" name="price" placeholder="Date of death" />
                    <RegistrationInput type="text" name="price" placeholder="Country" />
                    <RegistrationSelect name="genre" placeholder="Genre"/>
                    <RegistrationTextarea placeholder="Bio" name="author-bio"/>
                </div>
                <RouterLink to="/">
                    <RegistrationButton>Create</RegistrationButton>
                </RouterLink>
            </div>
        </div>
    </form>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
}
</script>
<style>
.registration-wrap{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.image-content{
    /* width: 100%; */
    height: 100%;
    background-color: var(--fileBlock);
    display: flex;
    align-items: center;
    justify-content: center;
}
.file-item{
    width: 316px;
    height: 428px;
    border-radius: 17px;
    border: 1px solid #AEAEAC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--fileItem);
    gap: 8px;
    position: relative;
}
.file-item .label{
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.file-input{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    opacity: 0;
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
.form-inputs{
    margin-top: 21px;
    margin-bottom: 34px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>